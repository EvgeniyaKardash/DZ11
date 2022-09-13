let links = [
        "https://www.google.by/",
        "https://www.yandex.by/",
        "https://www.mail.ru/",
        "https://www.onliner.by/",
        "https://www.facebook.com/",
        "https://www.instagram.com/",

        ]
            let n=1, max=6;
            
            
            function timer() {
                if (n>max) n=1;

            let res = links[n-1].substring(12);
            let res1 = res.substring(0, res.length - 1);
            webSite.innerHTML=res1;
        
            idLink.href= links[n-1];
            pic.src =`images/img${n++}b.jpg`;
            panel.innerHTML=`<h3 id="header">Заголовок слайда ${n-1}</h3>
            <a href="#">Далеко-далеко за словесными горами в стране гласных и соголасных живут рыбные тексты ${n-1} >></a>`;

           

           
            
            timerId = setTimeout(timer,1000);
            
            }


            function stop() {
            
                clearTimeout(timerId);
            }

            function forward() {
                if (n>max) n=1;

                let res2 = links[n-1].substring(12);
                let res3 = res2.substring(0, res2.length - 1);
                webSite.innerHTML=res3;

                idLink.href= links[n-1];
                pic.src =`images/img${n++}b.jpg`;
                panel.innerHTML=`<h3 id="header">Заголовок слайда ${n-1}</h3>
                <a href="#">Далеко-далеко за словесными горами в стране гласных и соголасных живут рыбные тексты ${n-1} >></a>`;
           

            }

            function previous() {
                
                if (n<1) n=6;

                let res4 = links[n-1].substring(12);
                let res5 = res4.substring(0, res4.length - 1);
                webSite.innerHTML=res5;

                idLink.href= links[n-1];
                pic.src =`images/img${n--}b.jpg`;
                panel.innerHTML=`<h3 id="header">Заголовок слайда ${n+1}</h3>
                <a href="#">Далеко-далеко за словесными горами в стране гласных и соголасных живут рыбные тексты ${n+1} >></a>`;
           
            }
            