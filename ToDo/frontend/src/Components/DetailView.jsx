import { Button } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import PublishIcon from "@material-ui/icons/Publish";
import EditIcon from "@material-ui/icons/Edit";
import { useEffect, useState } from "react";
import Appbar from "./Appbar";
import { useHistory } from "react-router-dom";

const DetailView = (props) => {
	const [todo, setTodo] = useState({});
	const [activeItem, setActiveItem] = useState({
		id: null,
		title: "",
		completed: false,
	});
	const [editing, setEditing] = useState(false);

	const getData = async () => {
		const URL = `http://127.0.0.1:8000/api/task-detail/${props.match.params.id}/`;
		const response = await fetch(URL);
		const data = await response.json();

		setTodo(data);
	};

	useEffect(() => {
		getData();
	}, []);

	const getCookie = (name) => {
		let cookieValue = null;
		if (document.cookie && document.cookie !== "") {
			const cookies = document.cookie.split(";");
			for (let i = 0; i < cookies.length; i++) {
				const cookie = cookies[i].trim();
				// Does this cookie string begin with the name we want?
				if (cookie.substring(0, name.length + 1) === name + "=") {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	};

	const handleChange = (e) => {
		let value = e.target.value;

		setActiveItem({
			...activeItem,
			title: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const csrftoken = getCookie("csrftoken");

		let url = `http://127.0.0.1:8000/api/task-create/`;

		if (editing === true) {
			url = `http://127.0.0.1:8000/api/task-update/${activeItem.id}/`;
			setEditing(false);
		}

		fetch(url, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
				"X-CSRFToken": csrftoken,
			},
			body: JSON.stringify(activeItem),
		})
			.then((response) => {
				getData();
				setActiveItem({
					id: null,
					title: "",
					completed: false,
				});
			})
			.catch((error) => {
				console.log("Error: " + error);
			});
	};

	const startEdit = (task) => {
		setActiveItem(task);
		setEditing(true);
	};

	const history = useHistory();
	const deleteItem = (task) => {
		const csrftoken = getCookie("csrftoken");
		let url = `http://127.0.0.1:8000/api/task-delete/${task.id}/`;

		fetch(url, {
			method: "DELETE",
			headers: {
				"Content-type": "application/json",
				"X-CSRFToken": csrftoken,
			},
		})
			.then((response) => {
				getData();
			})
			.catch((error) => {
				console.log("Error: " + error);
			});

		history.push("/");
	};

	const strikeItem = (task) => {
		setActiveItem(task);
		task.completed = !task.completed;

		let url = `http://127.0.0.1:8000/api/task-update/${task.id}/`;
		const csrftoken = getCookie("csrftoken");

		fetch(url, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
				"X-CSRFToken": csrftoken,
			},
			body: JSON.stringify({ completed: task.completed, title: task.title }),
		})
			.then((response) => {
				getData();
			})
			.catch((error) => {
				console.log("Error: " + error);
			});
	};

	return (
		<>
			<Appbar />
			<div className='App'>
				<div className='card'>
					<h1 className='text-center my-heading'>My ToDo List App</h1>
					<form
						onSubmit={handleSubmit}
						className='inputDiv d-flex justify-content-between'
					>
						<div className='forhr'>
							<input
								type='text'
								name='item'
								placeholder='Add an item'
								onChange={handleChange}
								value={activeItem.title}
								required
							/>
							<hr className='p-0 m-0' />
						</div>
						<div className='btnDiv'>
							<Button
								variant='contained'
								color='primary'
								type='submit'
								data-toggle='tooltip'
								data-placement='right'
								title='Submit'
							>
								<PublishIcon />
							</Button>
						</div>
					</form>
					<div
						className='button-section position-absolute w-100'
						style={{ bottom: "10px" }}
					>
						<div className='row'>
							<div className='col-md-4 col-4 d-flex flex-row align-items-center justify-content-center'>
								<button
									type='button'
									className='btn btn-sm btn-success'
									onClick={() => strikeItem(todo)}
									data-toggle='tooltip'
									data-placement='right'
									title='Completed'
								>
									<CheckCircleIcon />
								</button>
							</div>
							<div className='col-md-4 col-4 d-flex flex-row align-items-center justify-content-center'>
								<button
									type='button'
									className='btn btn-sm btn-primary'
									onClick={() => startEdit(todo)}
									data-toggle='tooltip'
									data-placement='right'
									title='Edit'
								>
									<EditIcon />
								</button>
							</div>
							<div className='col-md-4 col-4 d-flex flex-row align-items-center justify-content-center'>
								<button
									type='button'
									className='btn btn-sm btn-danger'
									onClick={() => deleteItem(todo)}
									data-toggle='tooltip'
									data-placement='right'
									title='Delete'
								>
									<HighlightOffIcon />
								</button>
							</div>
						</div>
					</div>
					<div className='Output px-4 py-3'>
						{activeItem.completed === false ? (
							<h5 className='my-0 py-1'>{todo.title}</h5>
						) : (
							<h5 className='my-0 py-1'>
								<strike>{todo.title}</strike>
							</h5>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default DetailView;
