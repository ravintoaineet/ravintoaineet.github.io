import GroupNode from "./nodes/GroupNode";
import MessageNode from "./nodes/MessageNode";
import RootNode from "./nodes/RootNode";

import tofu from "/tofu.png";

export const nodeTypes = {root:RootNode, message:MessageNode, subgroup:GroupNode};

export const nodes = [
    {
        id: 'message',
        type: 'message',
        data: { width: 350, header:"Hei! 👋", text: <>
            Kaikki alakohdat ovat painettavia ja niiden sisällä on lisätietoa ravintoaineista
        </> }, position: { x: -850, y: -325 },
    },
    {type:"root", id:'ravintoaineet', position:{x:-75,y:25}, data:{
        name:'Ravintoaineet',
        description: <>
            Hei! Tämä on 8-luokan kemian kouluprojekti ravintoaineista.
            <h3>Mitä on ravintoaineet?</h3>
            Ravintoaineet koostuu energia- ja suojaravintoaineista kuten rasvat, hiilihydraatit, vitamiinit ja proteiinit.
            Elimistö vaatii näitä aineita välttämättömiin toimintoihin, esimerkiksi lihastyöhön, ruoan sulatukseen ja elintoimintojen säätelyyn.
        </>
    }},

    {type:"subgroup", id:'energiaravintoaineet', position:{x:-400,y:-50}, data:{
        name:'Energiaravintoaineet', icon:'⚡', description:<>
            Energiaravintoaineet ovat aineita, jotka antavat keholle energiaa toteuttaa eri kehon toimintoja.
            <p/>Vaikka energiaravintoaineet ovat ollenaisia energianlähteitä niin täytyy muistaa, että vitamiinit ja kivennäisaineet vaikuttavat energian aineenvaihduntaan.
            Esimerkiksi B-vitamiinit muuttavat hiilihydraatteja energiaksi, ja rauta on tärkeä veren hapenkuljetuksessa.
        </>
    }},


    {type:"subgroup", id:'proteiinit', position:{x:-350,y:-200}, data:{name:'Proteiinit', icon:'💪', description:<>
        Proteiineilla eli valkuaisaineilla on iso rooli elimistön rakenteessa ja toiminnassa. Proteiinin tehtäviin kuuluu myös energian tuottaminen.
        Jokaisesta solustasi löytyy erilaisia proteiineja, ja jokaisella on oma tehtävänsä. Eniten proteiinia löytyy lihaksista.
        Valkuaisainepitoisen ruoan syöminen ja liikunta lisäävät lihasmassaa.
    </>, sources: [
        "🥩 Liha", "🐔 Broileri", "🐟 Kala", "🥚 Kananmunat", "🥛 Maitotuotteet", "🌱 Palkokasvit (Pavut & Linssit)", "🥜 Pähkinät", "🌽 Siemenet"
    ]}},
    {type:"subgroup", id:'rasvat', position:{x:-750,y:-100}, data:{name:'Rasvat', icon:'🍔'}},
    {type:"subgroup", id:'tyydyttymättömät', position:{x:-1000,y:-150}, data:{name:'Tyydyttymättömät', icon:'🥑', description:<>
        Tyydyttymättömät rasvat eli pehmeät rasvat sisältävät hiiliketjuilla kaksoissidoksia.
        <p/>Pehmeät rasvat ovat jaettu kahteen pääryhmään: Yksityydyttymättömät ja monityydyttymättömät.
        Monityydyttymättömissä rasvoissa on monta kaksoissidosta
    </>}},
    {type:"subgroup", id:'tyydyttyneet', position:{x:-975,y:-50}, data:{name:'Tyydyttyneet', icon:'🍟', description:<>
        Tyydyttyneet rasvat eli kovat rasvat eivät sisällä kaksoissidoksia hiilivetyketjuissaan.
        <p/>Kovat rasvat ovat vähemmän suositeltuja, koska ne voivat lisätä LDL-kolesterolia, mikä mahdollisesti aiheuttaa sydänsairauksia, koska verisuonet tukkiutuvat siitä.
    </>}},

    {type:"subgroup", id:'hiilihydraatit', position:{x:-450,y:125}, data:{name:'Hiilihydraatit', icon:'🌾'}},

    {type:"subgroup", id:'polysakkaridit', position:{x:-400,y:250}, data:{name:'Polysakkaridit', icon:'🥐'}},
    {type:"subgroup", id:'ravintokuitu', position:{x:-225,y:375}, data:{name:'Ravintokuidut', icon:'🍞', description:<>
        Ravintokuituja löytyy pääosin kasviperäisistä ruoka-aineista.
        Keho ei pysty hajottamaan ravintokuituja, mutta kuitu edistää suoliston liikettä ja auttaa ruoan kulkua ruoansulatuskanavassa.
        <p/>Ravintokuidut on jaettu kahteen pääryhmään:
        <br/><strong>Liukenevat kuidut</strong> muodostavat geelimäisiä rakenteita koskettaessaan veteen. Ne liukenevat veteen ja voivat auttaa säätelemään verensokeritasoja ja kolesterolitasoja.
        <br/><strong>Liukenemattomat kuidut</strong> taas eivät liukene veteen ja edistävät suoliston terveyttä. Esim. selluloosa
    </>, sources:["🍐 Hedelmät", "🥑 Vihannekset", "🍞 Täysjyvävilja", "🥜 Pähkinät", "🌻 Siemenet"]}},
    {type:"subgroup", id:'tärkkelys', position:{x:-500,y:400}, data:{name:'Tärkkelys', group:<>Polysakkaridi</>, icon:'🌽', formula:<>(C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)n</>}},
    
    // Glykogeeni?

    {type:"subgroup", id:'monodisakkaridit', position:{x:-750,y:225}, data:{name:'Mono- ja disakkaridit', icon:'🍰'}},
    {type:"subgroup", id:'fruktoosi', position:{x:-800,y:120}, data:{name:'Fruktoosi', icon:'🍎', group:<>Monosakkaridi</>, formula:<>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></>, description:<>
        Fruktoosia eli hedelmäsokeria esiintyy hunajassa ja kaikissa hedelmissä.
        <p/>Ihminen maistaa fruktoosin noin tuplasti makeampana kuin sakkaroosin, joka on koostumus fruktoosista ja glukoosista.
    </>}},
    {type:"subgroup", id:'glukoosi', position:{x:-1025,y:200}, data:{
        name:'Glukoosi', icon:'🌞', group:<>Monosakkaridi</>, formula:<>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></>, description:<>
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
    {type:"subgroup", id:'laktoosi', position:{x:-1100,y:350}, data:{
        name:'Laktoosi', icon:'🥛', group:<>Disakkaridi</>, formula:<>C<sub>12</sub>H<sub>22</sub>O<sub>11</sub></>, description:<>
            Laktoosi eli maitosokeri löytyy maidosta. Lehmänmaidossa sitä esiintyy 4,8% ja äidinmaidossa jopa 7%.
            <br/>Laktoosi on disakkaridi eli se muodostuu kahdesta yksinkertaisesta sokerimolekyylistä, gluukosista ja galaktoosista.
            <p/><strong>Laktaasi</strong> pilkkoo laktoosin kehossa ja muodostuu takaisin glukoosiksi ja galaktoosiksi, jolloin se voi imeytyä kehoon.
            Kuitenkin tavallisesti laktaasi häviää kehosta poikasten kasvaessa, mutta ihmiset ovat kehittyneet pysyvästi sietämään laktoosia.
            Tämän takia voit käyttää maitotuotteita päivittäin. 
    </>}},

    {type:"subgroup", id:'suojaravintoaineet', position:{x:300,y:0}, data:{name:'Suojaravintoaineet', icon:'⚔️'}},


    {type:"subgroup", id:'vitamiinit', position:{x:375,y:-150}, data:{name:'Vitamiinit', icon:'💊'}},

    {type:"subgroup", id:'rasvaliukoiset', position:{x:180,y:-300}, data:{name:'Rasvaliukoiset', icon:"🍔"}},
    {type:"subgroup", id:'a', position:{x:-120,y:-420}, data:{name:'A-vitamiini', group:"Rasvaliukoinen", icon:"🥕", color:"#ff1111",
        formula:<>C<sub>20</sub>H<sub>30</sub>O</>}},
    {type:"subgroup", id:'d', position:{x:80,y:-420}, data:{name:'D-vitamiini', group:"Rasvaliukoinen", icon:"🐟", color:"#ff1188", description:<>
        D-vitamiini on rasvaliukoinen vitamiiniryhmä, johon kuuluu luonnollisesti D<sub>1</sub>, D<sub>2</sub>, D<sub>3</sub>, D<sub>4</sub> ja D<sub>5</sub>
        <p/>D-vitamiini vaikuttaa luun aineenvaihduntaan, sydänlihaksen toimintaan, versisuonien suojeluun, vastustuskykyyn, suolistoon ja lihasten toimintaan.
    </>, sources: ["🌞 Aurinko", "🍣 Lohi", "🥚 Kananmuna", "🍄 Sienet"]}},
    {type:"subgroup", id:'e', position:{x:280,y:-420}, data:{name:'E-vitamiini', group:"Rasvaliukoinen", icon:"🌻", color:"#ff11ff", formula:<>C<sub>29</sub>H<sub>50</sub>O<sub>2</sub></>, description:<>
        E-vitamiini ryhmä koostuu kahdeksasta aineesta, joista ihmiskeho käyttää pelkästään α-tokoferolia.
        <p/>Se vaikuttaa elimistön rasvahapposynteesiin, vaikuttaa verihiutaleiden toimintaan, säätelee veren kolesterolitasoa, edistää verenkiertoa ja parantaa soluvälitteistä immuunivastetta.
    </>, sources:["🌻 Voikukkaöljy ja -siemenet", "🥜 Manteli", "🥚 Kananmuna", "🥑 Avokado", "🌿 Pinaatti"]}},
    {type:"subgroup", id:'k', position:{x:480,y:-420}, data:{name:'K-vitamiini', group:"Rasvaliukoinen", icon:"🥬", color:"#1111ff"}},


    {type:"subgroup", id:'vesiliukoiset', position:{x:560,y:-300}, data:{name:'Vesiliukoiset', icon:"💧"}},
    {type:"subgroup", id:'b', position:{x:700,y:-420}, data:{name:'B-vitamiini', group:"Vesiliukoinen", icon:"🥚", color:"#11aa11"}},
    {type:"subgroup", id:'c', position:{x:800,y:-320}, data:{name:'C-vitamiini', group:"Vesiliukoinen", icon:"🍊", color:"#aa11ff",
        formula:<>C<sub>6</sub>H<sub>8</sub>O</>}},

    {type:"subgroup", id:'hivenaineet', position:{x:450,y:275}, data:{name:'Hiven- ja kivennäisaineet', icon:'🧪'}},

    {type:"subgroup", id:'kalsium', position:{x:165,y:140}, data:{
        name:'Kalsium', icon:"Ca", group:"Makrokivennäisaine",
        description:"Kalsium on yleisin kivennäisaine elimistössä. Ihminen tarvitsee kalsiumia luuston ja hampaiden hyvinvointiin sekä aineenvaihduntaan",
        sources:[
            <><img src={tofu} style={{height:44, position:"absolute", transform:"translate(-6px, -10px)"}}></img>
                <span style={{whiteSpace:"pre"}}>       Tofu</span>
            </>, "🥛 Maitotuotteet", "Soijapavut", "🌿 Pinaatti"
        ]}},
    {type:"subgroup", id:'magnesium', position:{x:65,y:260}, data:{
        name:'Magnesium', icon:"Mg", group:"Makrokivennäisaine"}},
    {type:"subgroup", id:'natriumkalium', position:{x:120,y:370}, data:{name:'Natrium & Kalium', icon:"NaK", group:"Makrokivennäisaine"}},

    {type:"subgroup", id:'rauta', position:{x:420,y:460}, data:{name:'Rauta', icon:"Fe", group:"Mikrokivennäisaine"}},
    {type:"subgroup", id:'sinkki', position:{x:720,y:360}, data:{name:'Sinkki', icon:"Zn", group:"Mikrokivennäisaine"}},
    {type:"subgroup", id:'jodi', position:{x:740,y:240}, data:{name:'Jodi', icon:"I", group:"Mikrokivennäisaine"}},
    {type:"subgroup", id:'seleeni', position:{x:640,y:120}, data:{name:'Seleeni', icon:"Se", group:"Mikrokivennäisaine"}},
].filter(a => a.id != "message" || localStorage.getItem("message") != "false");

export const connections = [
    {id:'root-energia', type:"straight", source:'ravintoaineet', target:'energiaravintoaineet'},
    {id:'energia-proteiinit', type:"straight", source:'energiaravintoaineet', target:'proteiinit'},
    {id:'suoja-proteiinit', type:"straight", style:{opacity:"75%"}, source:'suojaravintoaineet', target:'proteiinit'},

    {id:'energia-rasvat', type:"straight", source:'energiaravintoaineet', target:'rasvat'},
    {id:'rasvat-tyydyttyneet', type:"straight", source:'rasvat', target:'tyydyttyneet'},
    {id:'rasvat-tyydyttymättömät', type:"straight", source:'rasvat', target:'tyydyttymättömät'},

    {id:'energia-hiilihydraatit', type:"straight", source:'energiaravintoaineet', target:'hiilihydraatit'},
    {id:'hiilihyd-polysakkaridit', type:"straight", source:'hiilihydraatit', target:'polysakkaridit'},
    {id:'polysakkaridit-tärkkelys', type:"straight", source:'polysakkaridit', target:'tärkkelys'},
    {id:'polysakkaridit-ravintokuitu', type:"straight", source:'polysakkaridit', target:'ravintokuitu'},

    {id:'energia-monodisakkaridit', type:"straight", source:'hiilihydraatit', target:'monodisakkaridit'},
    {id:'sokerit-glukoosi', type:"straight", source:'monodisakkaridit', target:'glukoosi'},
    {id:'sokerit-fruktoosi', type:"straight", source:'monodisakkaridit', target:'fruktoosi'},
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