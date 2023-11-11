export const nodes = [
    {type:"root", id:'ravintoaineet', position:{x:-75,y:25}, data:{
        name:'Ravintoaineet',
        description: <>
            Hei! Tämä on 8-luokan kemian kouluprojekti ravintoaineista.
            <h3>Mitä on ravintoaineet?</h3>
            Ravintoaineet koostuu energia- ja suojaravintoaineista kuten rasvat, hiilihydraatit, vitamiinit ja proteiinit.
            Elimistö vaatii näitä aineita välttämättömiin toimintoihin, esimerkiksi lihastyöhön, ruoan sulatukseen ja elintoimintojen säätelyyn.
        </>
    }},

    {type:"subgroup", id:'energiaravintoaineet', position:{x:-450,y:0}, data:{
        name:'Energiaravintoaineet', icon:'⚡', description:<>
            Energiaravintoaineet ovat aineita, jotka antavat keholle energiaa toteuttaa eri kehon toimintoja.
            <p/>Vaikka energiaravintoaineet ovat ollenaisia energianlähteitä niin täytyy muistaa, että vitamiinit ja kivennäisaineet vaikuttavat energian aineenvaihduntaan.
            Esimerkiksi B-vitamiinit muuttavat hiilihydraatteja energiaksi, ja rauta on tärkeä veren hapenkuljetuksessa.
        </>
    }},


    {type:"subgroup", id:'proteiinit', position:{x:-400,y:-175}, data:{name:'Proteiinit', icon:'💪', description:<>
        Proteiineilla eli valkuaisaineilla on iso rooli elimistön rakenteessa ja toiminnassa. Proteiinin tehtäviin kuuluu myös energian tuottaminen.
        Jokaisesta solustasi löytyy erilaisia proteiineja, ja jokaisella on oma tehtävänsä. Eniten proteiinia löytyy lihaksista.
        Valkuaisainepitoisen ruoan syöminen ja liikunta lisäävät lihasmassaa.
        <p/>Ruokvalion lähteisiin kuuluu liha, broileri, kala, kananmunat, maitotuotteet, palkokasvit (kuten pavut ja linssit), pähkinät ja siemenet.
    </>}},

    {type:"subgroup", id:'rasvat', position:{x:-800,y:-25}, data:{name:'Rasvat', icon:'🍔'}},

    {type:"subgroup", id:'hiilihydraatit', position:{x:-550,y:200}, data:{name:'Hiilihydraatit', icon:'🌾'}},
    {type:"subgroup", id:'ravintokuitu', position:{x:-300,y:300}, data:{name:'Ravintokuitu', icon:'🍞'}},
    {type:"subgroup", id:'tärkkelys', position:{x:-600,y:350}, data:{name:'Tärkkelys', icon:'🌽'}},
    {type:"subgroup", id:'sokerit', position:{x:-850,y:250}, data:{name:'Sokerit', icon:'🍰'}},
    {type:"subgroup", id:'glukoosi', position:{x:-1100,y:250}, data:{name:'Glukoosi', icon:'🌞', formula:<>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></>, description:<>
        Glukoosi eli rypäle- tai panimosokeri, on yksi yleisin sokeri. Glukoosia muodostuu fotosynteesissä!
        <p/>
        <div style={{whiteSpace:"pre", display:"flex", flexDirection:"row", gap:20}}>
            <div style={{display:"flex", flexDirection:"column"}}>
                <span>6 CO<sub>2</sub> + 6 H<sub>2</sub>O</span>
                <span>hiilidioksidi + vesi</span>
            </div>
            <div style={{display:"flex", flexDirection:"column"}}>
                <span>➡      C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub></span>
                <span>➡      glukoosi + happi</span>
            </div>
        </div>
    </>}},
    {type:"subgroup", id:'laktoosi', position:{x:-1200,y:375}, data:{
        name:'Laktoosi', icon:'🥛', formula:<>C<sub>12</sub>H<sub>22</sub>O<sub>11</sub></>, description:<>
            Laktoosi eli maitosokeri löytyy maidosta. Lehmänmaidossa sitä esiintyy 4,8% ja äidinmaidossa jopa 7%.
            <br/>Laktoosi on disakkaridi eli se muodostuu kahdesta yksinkertaisesta sokerimolekyylistä, gluukosista ja galaktoosista.
            <p/><strong>Laktaasi</strong> pilkkoo laktoosin kehossa ja muodostuu takaisin glukoosiksi ja galaktoosiksi, jolloin se voi imeytyä kehoon.
            Kuitenkin tavallisesti laktaasi häviää kehosta poikasten kasvaessa, mutta ihmiset ovat kehittyneet pysyvästi sietämään laktoosia.
            Tämän takia voit käyttää maitotuotteita päivittäin. 
    </>}},
    
    {type:"subgroup", id:'ksylitoli', position:{x:-900,y:350}, data:{name:'Ksylitoli', icon:'🦷', formula:<>C<sub>5</sub>H<sub>12</sub>O<sub>5</sub></>, description:<>
        
    </>}},
    {type:"subgroup", id:'fruktoosi', position:{x:-925,y:150}, data:{name:'Fruktoosi', icon:'🍎', formula:<>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></>, description:<>
        
    </>}},


    {type:"subgroup", id:'suojaravintoaineet', position:{x:300,y:0}, data:{name:'Suojaravintoaineet', icon:'⚔️'}},


    {type:"subgroup", id:'vitamiinit', position:{x:375,y:-150}, data:{name:'Vitamiinit', icon:'💊'}},

    {type:"subgroup", id:'rasvaliukoiset', position:{x:180,y:-300}, data:{name:'Rasvaliukoiset', icon:"🍔"}},
    {type:"subgroup", id:'a', position:{x:-120,y:-420}, data:{name:'A-vitamiini', group:"Rasvaliukoinen", icon:"🥕", color:"#ff1111",
        formula:<>C<sub>20</sub>H<sub>30</sub>O</>}},
    {type:"subgroup", id:'d', position:{x:80,y:-420}, data:{name:'D-vitamiini', group:"Rasvaliukoinen", icon:"🐟", color:"#ff1188", description:<>
        D-vitamiini on rasvaliukoinen vitamiiniryhmä, johon kuuluu luonnollisesti D<sub>1</sub>, D<sub>2</sub>, D<sub>3</sub>, D<sub>4</sub> ja D<sub>5</sub>
        <p/>D-vitamiini vaikuttaa luun aineenvaihduntaan, sydänlihaksen toimintaan, versisuonien suojeluun, vastustuskykyyn, suolistoon ja lihasten toimintaan.
        <p/>🌞 Aurinko 🍣 Lohi 🥚 Kananmuna 🍄 Sienet
    </>}},
    {type:"subgroup", id:'e', position:{x:280,y:-420}, data:{name:'E-vitamiini', group:"Rasvaliukoinen", icon:"🌻", color:"#ff11ff", formula:<>C<sub>29</sub>H<sub>50</sub>O<sub>2</sub></>, description:<>
        E-vitamiini ryhmä koostuu kahdeksasta aineesta, joista ihmiskeho käyttää pelkästään α-tokoferolia.
        <p/>Se vaikuttaa elimistön rasvahapposynteesiin, vaikuttaa verihiutaleiden toimintaan, säätelee veren kolesterolitasoa, edistää verenkiertoa ja parantaa soluvälitteistä immuunivastetta.
        <p/>🌻 Voikukkaöljy ja -siemenet 🥜 Manteli 🥚 Kananmuna 🥑 Avokado 🌿 Pinaatti
    </>}},
    {type:"subgroup", id:'k', position:{x:480,y:-420}, data:{name:'K-vitamiini', group:"Rasvaliukoinen", icon:"🥬", color:"#1111ff"}},


    {type:"subgroup", id:'vesiliukoiset', position:{x:560,y:-300}, data:{name:'Vesiliukoiset', icon:"💧"}},
    {type:"subgroup", id:'b', position:{x:700,y:-420}, data:{name:'B-vitamiini', group:"Vesiliukoinen", icon:"🥚", color:"#11aa11"}},
    {type:"subgroup", id:'c', position:{x:800,y:-320}, data:{name:'C-vitamiini', group:"Vesiliukoinen", icon:"🍊", color:"#aa11ff",
        formula:<>C<sub>6</sub>H<sub>8</sub>O</>}},

    {type:"subgroup", id:'hivenaineet', position:{x:450,y:275}, data:{name:'Hiven- ja kivennäisaineet', icon:'🧪'}},

    {type:"subgroup", id:'kalsium', position:{x:165,y:140}, data:{
        name:'Kalsium', icon:"Ca", group:"Makrokivennäisaine",
        description:"Kalsium on yleisin kivennäisaine elimistössä. Ihminen tarvitsee kalsiumia luuston ja hampaiden hyvinvointiin sekä aineenvaihduntaan"}},
    {type:"subgroup", id:'magnesium', position:{x:65,y:240}, data:{
        name:'Magnesium', icon:"Mg", group:"Makrokivennäisaine"}},
    {type:"subgroup", id:'natriumkalium', position:{x:120,y:370}, data:{name:'Natrium & Kalium', icon:"NaK", group:"Makrokivennäisaine"}},

    {type:"subgroup", id:'rauta', position:{x:420,y:460}, data:{name:'Rauta', icon:"Fe", group:"Mikrokivennäisaine"}},
    {type:"subgroup", id:'sinkki', position:{x:720,y:360}, data:{name:'Sinkki', icon:"Zn", group:"Mikrokivennäisaine"}},
    {type:"subgroup", id:'jodi', position:{x:740,y:240}, data:{name:'Jodi', icon:"I", group:"Mikrokivennäisaine"}},
    {type:"subgroup", id:'seleeni', position:{x:640,y:120}, data:{name:'Seleeni', icon:"Se", group:"Mikrokivennäisaine"}},
];

export const connections = [
    {id:'root-energia', type:"straight", source:'ravintoaineet', target:'energiaravintoaineet'},
    {id:'energia-proteiinit', type:"straight", source:'energiaravintoaineet', target:'proteiinit'},
    {id:'suoja-proteiinit', type:"straight", style:{opacity:"75%"}, source:'suojaravintoaineet', target:'proteiinit'},

    {id:'energia-rasvat', type:"straight", source:'energiaravintoaineet', target:'rasvat'},

    {id:'energia-hiilihydraatit', type:"straight", source:'energiaravintoaineet', target:'hiilihydraatit'},
    {id:'energia-tärkkelys', type:"straight", source:'hiilihydraatit', target:'tärkkelys'},
    {id:'energia-ravinto', type:"straight", source:'hiilihydraatit', target:'ravintokuitu'},
    {id:'energia-sokerit', type:"straight", source:'hiilihydraatit', target:'sokerit'},
    {id:'sokerit-glukoosi', type:"straight", source:'sokerit', target:'glukoosi'},
    {id:'sokerit-ksylitoli', type:"straight", source:'sokerit', target:'ksylitoli'},
    {id:'sokerit-fruktoosi', type:"straight", source:'sokerit', target:'fruktoosi'},
    {id:'glukoosi-laktoosi', type:"straight", source:'glukoosi', target:'laktoosi'},

    


    {id:'root-suoja', type:"straight", source:'ravintoaineet', target:'suojaravintoaineet'},
    {id:'suoja-hiven', type:"straight", source:'suojaravintoaineet', target:'hivenaineet'},

    {id:"a", source:'hivenaineet', target:'kalsium'},
    {id:"b", source:'hivenaineet', target:'magnesium'},
    {id:"c", source:'hivenaineet', target:'natriumkalium'},
    {id:"d", source:'hivenaineet', target:'rauta'},
    {id:"e", source:'hivenaineet', target:'sinkki'},
    {id:"f", source:'hivenaineet', target:'jodi'},
    {id:"g", source:'hivenaineet', target:'seleeni'},

    {id:"h", type:"straight", source:'suojaravintoaineet', target:'vitamiinit'},
    {id:"i", type:"straight", source:'vitamiinit', target:'vesiliukoiset'},
    {id:"j", type:"straight", source:'vitamiinit', target:'rasvaliukoiset'},

    {id:"k", type:"straight", source:'rasvaliukoiset', target:'a'},
    {id:"l", type:"straight", source:'rasvaliukoiset', target:'d'},
    {id:"m", type:"straight", source:'rasvaliukoiset', target:'e'},
    {id:"n", type:"straight", source:'rasvaliukoiset', target:'k'},

    {id:"o", type:"straight", source:'vesiliukoiset', target:'b'},
    {id:"p", type:"straight", source:'vesiliukoiset', target:'c'},
];