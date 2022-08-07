from django.shortcuts import render, HttpResponse


def index(request):
    return render(request, 'index.html')


def analyze(request):

    djText = request.POST.get('textarea', 'default')

    punc = request.POST.get('punc', 'default')
    capital = request.POST.get('capital', 'default')
    lines = request.POST.get('lines', 'default')
    spaces = request.POST.get('spaces', 'default')

    if punc == 'on':
        punctuations = '''!()-[];:'"\,<>./?@#$%^&*_}~{'''
        analyzed = ''
        for char in djText:
            if char not in punctuations:
                analyzed = analyzed + char

        analyzedText = {'analyze': analyzed}
        djText = analyzed

    if capital == 'on':
        analyzed = ''
        for char in djText:
            analyzed = analyzed + char.upper()

        analyzedText = {'analyze': analyzed}
        djText = analyzed

    if lines == 'on':
        analyzed = ''
        for char in djText:
            if char != '\n' and char != '\r':
                analyzed = analyzed + char

        analyzedText = {'analyze': analyzed}
        djText = analyzed

    if spaces == 'on':
        analyzed = ''
        for index, char in enumerate(djText):
            if not (djText[index] == ' ' and djText[index + 1] == ' '):
                analyzed = analyzed + char

        analyzedText = {'analyze': analyzed}
        djText = analyzed

    if (punc != 'on' and capital != 'on' and lines != 'on' and spaces != 'on'):
        return render(request, 'error.html', {'error': "Please select any operation and Try Again"})

    return render(request, 'analyze.html', analyzedText)
