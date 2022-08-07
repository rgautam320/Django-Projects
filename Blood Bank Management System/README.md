# Blood Bank Management System in Django

## TECH STACK USED

1. Django
2. MySQL Database
3. Bootstrap

## Live Link: [URL](https://blood-bank-management-system.azurewebsites.net)

## LIST OF CLOUD SERVICES USED

### 1. Azure Blob Storage:

We are storing images of patients and donors in Azure Blob Storage which is a IAAS Service provided by Azure.

### 2. MySQL Database Server on Azure

We have created a MySQL Database Server on Azure. So, everything we do in our application gets saved in the cloud database. It is a PAAS provided by Azure.

### 3. Azure DevOps / GitHub

We are using Azure DevOps and GitHub to manage our codes and also we have set up a pipeline for continuous deployment. It is a SAAS provided by Azure.

### 4. Azure Web App Service

We have created a web application on Azure where we are hosting our application. It is a PAAS provided by Azure.

## PROJECT DESCRIPTION

We have used Django along with SQL Database. For Image storage, we are azure Azure Blob.

### Admin

-   Create Admin account using following command

```
py manage.py createsuperuser
```

-   After Login, can see Unit of blood of each blood group available, Number Of Donor, Number of blood request, Number of approved request, Total Unit of blood on Dashboard.
-   Can View, Update, Delete Donor.
-   Can View, Update, Delete Patient.
-   Can View Donation Request made by donor and can approve or reject that request based on disease of donor.
-   If Donation Request approved by admin then that unit of blood added to blood stock of that blood group.
-   If Donation Request rejected by admin then 0 unit of blood added to stock.
-   Can View Blood Request made by donor / patient and can approve or reject that request.
-   If Blood Request approved by admin then that unit of blood reduced from blood stock of that blood group.
-   If Blood Request rejected by admin then 0 unit of blood reduced from stock.
-   Can see history of blood request.
-   Can Update Unit Of Particular Blood Group.

### Donor

-   Donor can create account by providing basic details.
-   After Login, Donor can donate blood, After approval from admin only, blood will be added to blood stock.
-   Donor can see their donation history with status (Pending, Approved, Rejected).
-   Donor can also request for blood from blood stock.
-   Donor can see their blood request history with status.
-   Donor can see number of blood request Made, Approved, Pending, Rejected by Admin on their dashboard.
    > **_NOTE:_** Donor can donate blood and can also request for blood.

### Patient

-   Create account (No Approval Required By Admin, Can Login After Signup)
-   After Login, Can see number of blood request Made, Approved, Pending, Rejected by Admin on their dashboard.
-   Patient can request for blood of specific blood group and unit from blood stock.
-   Patient can see their blood request history with status (Pending, Approved, Rejected).

## HOW TO RUN THIS PROJECT LOCALLY
- Install Python(3.7.6) (Dont Forget to Tick Add to Path while installing Python)
- Download This Project Zip Folder and Extract it
- Move to project folder in Terminal. Then run following Commands :

```
pip install -r requirements.txt
```

```
py manage.py makemigrations
py manage.py migrate
py manage.py runserver
```
- Now go to the following URL in your browser
```
http://127.0.0.1:8000/
```

## Sample Screenshots

### 1. Home Page

![image](https://user-images.githubusercontent.com/71542496/164946558-4ae33e40-698f-4d93-9085-4c9c126f5878.png)

### 2. Admin Login

![image](https://user-images.githubusercontent.com/71542496/164946582-cecbb773-68ce-4654-9369-695daae38aaa.png)

### 3. Donor Login

![image](https://user-images.githubusercontent.com/71542496/164946593-9cc3c77c-2f28-4c32-9d29-8af42b47d895.png)

### 4. Donor Signup

![image](https://user-images.githubusercontent.com/71542496/164946602-163f5176-aebb-48dd-afd2-3ab677e7d8c4.png)

### 5. Patient Login

![image](https://user-images.githubusercontent.com/71542496/164946613-18108dc5-c3a0-4e5c-8d9a-7031bc3c72a5.png)

### 6. Patient Signup

![image](https://user-images.githubusercontent.com/71542496/164946625-96ccce2b-9aee-420b-a272-b2ec664f7c99.png)

### 7. Admin Dashboard

![image](https://user-images.githubusercontent.com/71542496/164946646-b4d1675c-eb69-4297-b0cd-819e5a0328a4.png)

### 8. Donor Dashboard

![image](https://user-images.githubusercontent.com/71542496/164946685-85f3d3eb-e71d-4c26-bd1b-faf91cf78122.png)

### 9. Patient Dashboard

![image](https://user-images.githubusercontent.com/71542496/164946752-2abd0159-18d9-4e3e-b626-3def29013cf6.png)

### 10. Logout Page

![image](https://user-images.githubusercontent.com/71542496/164946702-8dd5fbe5-78d8-46f9-b23a-a98f8d7fe132.png)

You can visit the website to explore more.

## Thank You
