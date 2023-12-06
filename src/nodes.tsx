import GroupNode from "./nodes/GroupNode";
import MessageNode from "./nodes/MessageNode";
import RootNode from "./nodes/RootNode";

import tofu from "/tofu.png";
import aminohapot from "/aminohapot.png";
import rasvat from "/rasva.png";
import styled from "styled-components";

export const nodeTypes = {root:RootNode, message:MessageNode, subgroup:GroupNode};

const Wrappable = styled.p`
    display:flex;
    flex-direction:row;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
    }
`;

function SubVitamin(data: {name: React.ReactNode, alt: string, content: any, width?: any, sources: string[]}) {
    return <div style={{display:"flex", flexDirection:"column", gap:8, width:data.width != undefined ? data.width : "max(290px, 30%)"}}>
        <div style={{display:"flex", flexDirection:"column", padding:16, borderRadius:"16px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}}>
            <div style={{display:"flex", flexDirection:"row", gap:8}}>
                <span style={{color:"#000", fontSize:"18px", fontWeight:700}}>{data.name}</span>
                <span style={{color:"#6B7280"}}>{data.alt}</span>
            </div>
            <div style={{fontSize:18}}>
                {data.content}
            </div>
        </div>
        <div style={{display:"flex", flexDirection:"row", fontSize:14, gap:8, justifyContent:"center"}}>
            {data.sources.map((source: string) => (
                <div key={source} style={{background:"#fff", boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px", borderRadius:10, padding:4}}>
                    <span>{source}</span>
                </div>
            ))}
        </div>
  </div>
}

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
        <Wrappable>
            <div>
                Proteiinit ovat makromolekyylejä, jotka muodostuvat aminohapoista. Yksi proteiinimolekyyli voi sisältää tuhansia aminohappoja.
                Aminohapot muodostuvat hiilestä, vedystä, hapesta ja typestä. Usein niissä esiintyy myös rikkiä ja fosforia.
                Aminiohapot ovat kiinnittyneet toisiinsa peptidisidoksilla. Aminohappomolekyyliin kuulluu karboksyyliryhmä (-COOH) ja aminoryhmä (-NH<sub>2</sub>).
                <br/>Ruuan mukana tuleva proteiini hajoaa suolistossa aminohapoiksi ja elimistö muunta ne tarvittaviksi valkuaisaineiksi.
            </div>
            <img src={aminohapot} alt="Aminohappojen rakennekaava" style={{width:"200px", height:"100px"}}/>
        </Wrappable>
        Proteiini denaturoituu paistamalla tai keittämällä. Tämä muuttaa proteiinin rakennetta pysyvästi, jolloin se kadottaa toimintakykynsä.
        Denaturoituminen on tärkeä ruoanvalmistukelle. Proteiinin rakenne ja maku tulevat paremmin esille denaturoituneena.
    </>, sources: [
        "🥩 Liha", "🐔 Broileri", "🐟 Kala", "🥚 Kananmunat", "🥛 Maitotuotteet", <span title="Pavut & Linssit">🌱 Palkokasvit</span>, "🥜 Pähkinät", "🌽 Siemenet"
    ]}},
    {type:"subgroup", id:'rasvat', position:{x:-750,y:-100}, data:{name:'Rasvat', icon:'🍔', description:<>
        <Wrappable>
            <div>
                Rasvat ovat elimistölle elintärkeitä energian tuottajia. Rasvat myös suojaavat ja toimivat lämmöneristeenä.
                Rasvat kuljettavat rasvaliukoisia vitamiineja (A, D, E ja K) eri puolille elimistöä.
                <p>Rakenteeltaan rasvat ovat estereitä ja muodostuvat glyserolista ja rasvahapoista eli pitkäketjuisista karboksyylihapoista.
                Glyserolin kustakin hydroksyyliryhmästä lähtee rasvahappo. Yleensä rasvahapoissa on 12-18 hiiltä ja hiilimäärä on useimmiten parillinen.
                </p>
            </div> 
            <img src={rasvat} alt="Aminohappojen rakennekaava" width="355px" height="260px"/>
        </Wrappable>
    </>}},
    {type:"subgroup", id:'tyydyttymättömät', position:{x:-1000,y:-150}, data:{name:'Tyydyttymättömät', group:"Unsaturated", icon:'🥑', description:<>
        Tyydyttymättömät rasvat eli pehmeät rasvat sisältävät hiiliketjuilla kaksoissidoksia.
        Pehmeät rasvat ovat jaettu kerta- ja monityydyttymättömiin rasvoihin.
        Monityydyttymättömissä rasvoissa on monta kaksoissidosta.
        <p/>Kasvirasvat yleensä ovat nestemäisiä huoneenlämmössä.
    </>, sources:["🌾 Kasviöljy", "🐟 Kala", "🥜 Pähkinät"]}},
    {type:"subgroup", id:'tyydyttyneet', position:{x:-975,y:-50}, data:{name:'Tyydyttyneet', group:"Saturated", icon:'🍟', description:<>
        Tyydyttyneet rasvat eli kovat rasvat eivät sisällä kaksoissidoksia hiilivetyketjuissaan.
        Kovat rasvat ovat enemmikseen eläinrasvoja ja ovat huoneenlämmössä kiinteitä.
        <p/>Kovat rasvat ovat vähemmän suositeltuja, koska ne voivat lisätä LDL-kolesterolia, mikä mahdollisesti aiheuttaa sydänsairauksia, kun verisuonet tukkiutuvat siitä.
    </>, sources:["🥩 Liha", "🧈 Voi", "🎂 Leivonnaiset"]}},

    {type:"subgroup", id:'hiilihydraatit', position:{x:-450,y:125}, data:{name:'Hiilihydraatit', icon:'🌾', description:<>
        Hiilihydraatit ovat yhdisteitä, jotka koostuvat hiilestä, vedystä ja hapesta. Ne ovat kehon pääenergianlähde.
        Hiilihydraatit jaetaan yleensä sokereihin, tärkkelykseen ja ravintokuituihin. Kuitenkin kemiallinen jako on mono-, di- ja polysakkaridit.
    </>}},

    {type:"subgroup", id:'polysakkaridit', position:{x:-400,y:250}, data:{name:'Polysakkaridit', icon:'🥐', description:<>
        Polysakkaridit ovat valtavia monosakkaridiketjuja, jotka voivat olla jopa tuhannen monosakkaridin pituisia.
        <p/>Ne hajotetaan ruoansulatusprosessissa monosakkarideiksi, jotta niitä voidaan käyttää energianlähteenä tai muihin tarpeisiin.
        Tämä hajotusprosessi kestää kauemmin ketjun pituuden takia, mikä selittää, miksi niiden imeytyminen on hitaampaa verrattuna monosakkarideihin.
    </>}},
    {type:"subgroup", id:'ravintokuitu', position:{x:-225,y:375}, data:{name:'Ravintokuidut', icon:'🍞', description:<>
        Ravintokuituja löytyy pääosin kasviperäisistä ruoka-aineista.
        Keho ei pysty hajottamaan ravintokuituja, mutta kuitu edistää suoliston liikettä ja auttaa ruoan kulkua ruoansulatuskanavassa.
        <p/>Ravintokuidut on jaettu kahteen pääryhmään:
        <br/><strong>Liukenevat kuidut</strong> muodostavat geelimäisiä rakenteita koskettaessaan veteen. Ne liukenevat veteen ja voivat auttaa säätelemään verensokeritasoja ja kolesterolitasoja.
        <br/><strong>Liukenemattomat kuidut</strong> taas eivät liukene veteen ja edistävät suoliston terveyttä. Esim. selluloosa
    </>, sources:["🍐 Hedelmät", "🥑 Vihannekset", "🍞 Täysjyvävilja", "🥜 Pähkinät", "🌻 Siemenet"]}},
    {type:"subgroup", id:'tärkkelys', position:{x:-500,y:400}, data:{name:'Tärkkelys', group:<>Polysakkaridi</>, icon:'🌽', formula:<>(C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)n</>, description:<>
        Tärkkelys on glukoosiyksiköistä muodostuva ketju. Se on valkoinen ja rakeinen molekyyli, joka ei liukene kylmään veteen eikä alkoholiin.
        Tärkkelykset jaetaan suoraketjuisiin amylooseihin ja haarautuneisiin amylopektiineihin.
        <p/>Kaikki vihreät kasvit tuottavat tärkkelystä säilöäkseen ylimääräistä glukoosia. Tärkkelys varastoituu viherhiukkasiin tai muihin varastoihin, kuten juuriin, mukuloihin tai siemeniin.
    </>, sources:["🍚 Riisi", "🌽 Maissi", "🥔 Peruna"]}},
    
    // Glykogeeni?

    {type:"subgroup", id:'monodisakkaridit', position:{x:-750,y:225}, data:{name:'Mono- ja disakkaridit', icon:'🍰', description:<>
            Mono- ja disakkaridit ovat niitä sokereita, joita mietit ensimmäisenä, kun kuullet sanan sokeri. Perussokeri on sakkaroosi, joka on disakkaridi.
            <p/><b>Monosakkaridit</b> ovat yksinkertaisia hiilihydraatteja, jotka koostuvat yhdestä sokeriyksiköstä.
            <br/><b>Disakkaridit</b> ovat sokerilajeja, jotka koostuvat kahdesta monosakkaridista. Elimistö pilkkoo nämä monosakkarideiksi pystyäkseen hyödyntämään niitä.
        </>, table: <table><tbody>
            <tr>
                <td colSpan={2}><b>Sokereiden suhteellinen makeus</b></td>
            </tr>
            <tr>
                <td>Laktoosi (Maitosokeri)</td>
                <td>15</td>
            </tr>
            <tr>
                <td>Maltoosi (Mallassokeri)</td>
                <td>30</td>
            </tr>
            <tr>
                <td>Galaktoosi</td>
                <td>32</td>
            </tr>
            <tr>
                <td>Glukoosi (Rypälesokeri)</td>
                <td>70</td>
            </tr>
            <tr>
                <td>Sakkaroosi (Ruokosokeri)</td>
                <td>100</td>
                </tr>
            <tr>
                <td>Ksylitoli (Koivusokeri)</td>
                <td>100</td>
            </tr>
            <tr>
                <td>Fruktoosi (Hedelmäsokeri)</td>
                <td>140–175</td>
            </tr>
        </tbody></table>
    }},
    {type:"subgroup", id:'fruktoosi', position:{x:-800,y:120}, data:{name:'Fruktoosi', icon:'🍎', group:<>Monosakkaridi</>, formula:<>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></>, description:<>
        Fruktoosia eli hedelmäsokeria esiintyy hunajassa ja kaikissa hedelmissä.
        <p/>Ihminen maistaa fruktoosin noin tuplasti makeampana kuin sakkaroosin, joka on koostumus fruktoosista ja glukoosista.
    </>}},
    {type:"subgroup", id:'glukoosi', position:{x:-1025,y:200}, data:{
        name:'Glukoosi', icon:'🌞', group:<>Monosakkaridi</>, formula:<>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></>, description:<>
            Glukoosi eli rypäle- tai panimosokeri, on yksi yleisimmistä sokereista.
            <br/>Glukoosi on monosakkaridi ja sitä esiintyy laktoosissa, maltoosissa ja sakkaroosissa.
            Sitä myös esiintyy useissa polysakkarideissa, kuten glykogeenissa, tärkkelyksessä, selluloosassa ja kalloosissa.
            <p/>
            <b>Glukoosia muodostuu fotosynteesissä!</b>
            <div style={{whiteSpace:"pre", display:"flex", flexDirection:"row", gap:20, lineHeight:"20px", marginTop:8}}>
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
    {type:"subgroup", id:'sakkaroosi', position:{x:-1075,y:80}, data:{name:'Sakkaroosi', icon:'🥧', group:<>Disakkaridi</>, formula:<>C<sub>12</sub>H<sub>22</sub>O<sub>11</sub></>, description:<>
        Sakkaroosi eli ruokosokeri tai tavallinen sokeri on disakkaridi, joka muodostuu glukoosista ja fruktoosista.
        Sukkaroosilla ei ole sulamispistettä, vaan se hajoaa lämmitysnopeuden mukaan.
        <p/>Sakkaroosia löytyy sokerijuurikkaasta (16-20%), sokeriruo'osta (13-20%), ananaksesta ja maissista.
    </>}},
    {type:"subgroup", id:'laktoosi', position:{x:-1100,y:350}, data:{
        name:'Laktoosi', icon:'🥛', group:<>Disakkaridi</>, formula:<>C<sub>12</sub>H<sub>22</sub>O<sub>11</sub></>, description:<>
            Laktoosi eli maitosokeri löytyy maidosta. Lehmänmaidossa sitä esiintyy 4,8% ja äidinmaidossa jopa 7%.
            <br/>Laktoosi on disakkaridi eli se muodostuu kahdesta yksinkertaisesta sokerimolekyylistä, gluukosista ja galaktoosista.
            <p/><strong>Laktaasi</strong> pilkkoo laktoosin kehossa ja muodostuu takaisin glukoosiksi ja galaktoosiksi, jolloin se voi imeytyä kehoon.
            Kuitenkin tavallisesti laktaasi häviää kehosta poikasten kasvaessa, mutta ihmiset ovat kehittyneet pysyvästi sietämään laktoosia.
            Tämän takia voit käyttää maitotuotteita päivittäin. 
    </>}},

    {type:"subgroup", id:'suojaravintoaineet', position:{x:300,y:0}, data:{name:'Suojaravintoaineet', icon:'⚔️', description:<>
        Suojaravintoaineet ovat elimistölle välttämättömiä ravintoaineita, joihin kuuluu vitamiinit, hivenaineet ja kivennäisaineet. Aineet tukevat kehon tavallista toimintaa ja terveyttä.
    </>}},


    {type:"subgroup", id:'vitamiinit', position:{x:375,y:-150}, data:{name:'Vitamiinit', icon:'💊', description:<>
        Vitamiinit ovat elintärkeitä jokaiselle. Ne osallistuvat monin tavoin elimistön hyvinvointiin. Vitamiineja on monia erilaisia ja ne ryhmitetään rasvaliukoisiin ja vesiliukoisiin.
    </>}},

    {type:"subgroup", id:'rasvaliukoiset', position:{x:180,y:-300}, data:{name:'Rasvaliukoiset', icon:"🍔", description:<>
        Rasvaliukoiset vitamiinit liukenevat rasvaan, joten ne varastoituvat rasvakudoksiin ja maksaan pidemmäksi aikaa.
        <br/>Liiallinen saanti voi olla terveyshaitta.
    </>}},
    {type:"subgroup", id:'a', position:{x:-120,y:-420}, data:{name:'A-vitamiini', group:"Rasvaliukoinen", icon:"🥕", color:"#ff1111", formula:<>C<sub>20</sub>H<sub>30</sub>O</>, description:<>
        A-vitamiini eli eläinperäinen retinoli tai kasviperäinen karotenoidi on rasvaliukoinen vitamiini, jolla on monia vaikutuksia kuten
        <li>Parantaa hämäränäköä.</li>
        <li>Tärkeä ihon ja limakalvojen terveydelle sekä solujen kasvulle.</li>
        <li>Auttaa immuunijärjestelmän toimintaa ja torjuu infektioita.</li>
    </>, sources:["🐟 Kala", "🍅 Tomaatti", "🥛 Maitotuotteet", "🥚 Kananmuna"]}},
    {type:"subgroup", id:'d', position:{x:80,y:-420}, data:{name:'D-vitamiini', group:"Rasvaliukoinen", icon:"🐟", color:"#ff1188", description:<>
        D-vitamiini eli kalsiferoli on rasvaliukoinen vitamiiniryhmä, johon kuuluu luonnollisesti D<sub>1</sub>, D<sub>2</sub>, D<sub>3</sub>, D<sub>4</sub> ja D<sub>5</sub>

        <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", gap:16, marginTop:16}}>
        <SubVitamin width="max(290px, min(45%, 450px))" name={<>D<sub>2</sub>-vitamiini</>} alt="ergokalsiferoli" content="Edistää kalsiumin ja fosforin imeytymistä. Tukee luuston terveyttä."
            sources={["🍄Sienet", "🌾Viljat"]}/>
        <SubVitamin width="max(290px, min(45%, 450px))" name={<>D<sub>3</sub>-vitamiini</>} alt="kolekalsiferoli" content="Edistää kalsiumin ja fosforin imeytymistä. Parantaa immuniteettia. Positiivisia mielialan vaikutuksia."
            sources={["☀️Aurinko", "🐟Lohi", "🥛Maitotuotteet", "🥚Kananmuna"]}/>
        </div>
    </>}},
    {type:"subgroup", id:'e', position:{x:280,y:-420}, data:{name:'E-vitamiini', group:"Rasvaliukoinen", icon:"🌻", color:"#ff11ff", formula:<>C<sub>29</sub>H<sub>50</sub>O<sub>2</sub></>, description:<>
        E-vitamiinilla on kaksi pääryhmää tokoferoli ja tokotrienoli, jonka sisällä on eri isomeerejä. Ihmiskeho käyttää pelkästään α-tokoferolia.
        <p/>E-vitamiini vaikuttaa elimistön rasvahapposynteesiin, verihiutaleiden toimintaan, säätelee veren kolesterolitasoa, edistää verenkiertoa ja parantaa soluvälitteistä immuunivastetta.
    </>, sources:["🌻 Voikukkaöljy ja -siemenet", "🥜 Manteli", "🥚 Kananmuna", "🥑 Avokado", "🌿 Pinaatti"]}},
    {type:"subgroup", id:'k', position:{x:480,y:-420}, data:{name:'K-vitamiini', group:"Rasvaliukoinen", icon:"🥬", color:"#1111ff", description:<>
        K-vitamiini eli kasviperäinen fyllokinooni (K<sub>1</sub>) tai pääosin eläinperäinen menakinoni (K<sub>2</sub>) on rasvaliukoinen vitamiini, joilla on monta vaikutusta kuten
        <li>Välttämätön veren hyytymisessä. Se auttaa tuottamaan protrombiinia ja muita hyytymistekijöitä.</li>
        <li>Parantaa luuston terveyttä, osallistuen luun aineenvaihduntaan.</li>
        <p/><small>Elimistömme suolistobakteerit voivat tuottaa K-vitamiinia</small> 
    </>, sources:["🌿 Pinaatti", "🥦 Parsakaali", "🥬 Lehtikaali"]}},


    {type:"subgroup", id:'vesiliukoiset', position:{x:560,y:-300}, data:{name:'Vesiliukoiset', icon:"💧", description:<>
        Vesiliukoiset vitamiinit liukenevat veteen, joten ne eivät varastoidu elimistöön ja suurin osa poistuu virtsan mukana.
    </>}},
    {type:"subgroup", id:'b', position:{x:700,y:-420}, data:{name:'B-vitamiini', group:"Vesiliukoinen", icon:"🥚", color:"#11aa11", description:<>
        <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", gap:16}}>
            <SubVitamin name={<>B<sub>1</sub>-vitamiini</>} alt="tiamiini" content="Energiantuotanto ja hermoston toiminta."
                sources={["🥜Pähkinät", "🌻Siemenet", "🌾Viljat", "🐷Liha"]}/>
            <SubVitamin name={<>B<sub>2</sub>-vitamiini</>} alt="riboflaviini" content="Energiantuotanto ja solujen kasvu."
                sources={[ "🥛Maitotuotteet", "🍄Sienet", "🥗Vihannekset" ]}/>
            <SubVitamin name={<>B<sub>3</sub>-vitamiini</>} alt="niasiini" content="Energiantuotanto ja DNA:n korjaus."
                sources={[ "🐔Kana", "🐟Kala", "🥜Pähkinät", "🌾Vilja" ]}/>
            <SubVitamin name={<>B<sub>5</sub>-vitamiini</>} alt="pantoteenihappo" content="Rasvahappojen ja hormonien tuotanto."
                sources={[ "🥚Kananmuna", "🥦Parsakaali", "🌾Vilja" ]}/>
            <SubVitamin name={<>B<sub>6</sub>-vitamiini</>} alt="pyridoksiini" content="Aminohappojen aineenvaihdunta ja hermoston toiminta."
                sources={[ "🍌Hedelmät", "🐔Kana", "🥔Perunat" ]}/>
            <SubVitamin name={<>B<sub>7</sub>-vitamiini</>} alt="biotiini" content="Rasvojen, hiilihydraattien ja aminohappojen aineenvaihdunta."
                sources={[ "🥚Kananmuna", "🐟Kala", "🥜Pähkinät", "🥬Kukkakaali" ]}/>
            <SubVitamin name={<>B<sub>9</sub>-vitamiini</>} alt="foolihappo" content="DNA:n synteesi ja solujen jakautuminen."
                sources={[ "🌱Pavut", "🍊Hedelmät", "🌾Viljat" ]}/>
            <SubVitamin name={<>B<sub>12</sub>-vitamiini</>} alt="foolihappo" content="Punasolujen muodostuminen ja hermojen toiminta."
                sources={[ "🥩Liha", "🐟Kala", "🥛Maitotuotteet", "🥚Kananmuna" ]}/>
        </div>
    </>}},
    {type:"subgroup", id:'c', position:{x:800,y:-320}, data:{name:'C-vitamiini', group:"Vesiliukoinen", icon:"🍊", color:"#aa11ff", formula:<>C<sub>6</sub>H<sub>8</sub>O</>, description:<>
        C-vitamiini eli askorbiinihappo on vesiliukoinen vitamiini.
        <li>Toimii antioksidanttina, auttaen vähentämään vapaita radikaaleja. Suojaa soluja oksidatiiviselta stressiltä.</li>
        <li>Välttämätön kollageenin muodostumisessa, joka on tärkeä proteiini ihon, luiden, hampaiden ja rustojen terveydelle.</li>
        <li>Edistää mmuunijärjestelmän tavallista toimintaa ja auttaa kehoa torjumaan infektioita.</li>
        <li>Parantaa raudan imeytymistä ruoasta.</li>
        <li>Auttaa tietyissä aineenvaihduntaprosessien säätelyssä kuten karnitiinin.</li>
    </>, sources:["🍅 Hedelmät", "🌶 Paprika", "🍓 Marjat"]}},

    {type:"subgroup", id:'kivennaisaineet', position:{x:450,y:275}, data:{name:'Hiven- ja kivennäisaineet', icon:'🧪', description:<>
        Kivennäisaineet ovat tärkeitä ravintoaineita, joita elimistö tarvitsee tietyissä määrissä toimiakseen, jotka jaetaan makro- ja mikrokivennäisaineisiin.
        <p>
            <ul><b>Kivennäisaineet (Makro)</b>
                <li>Makrokivennäisaineita elimistö tarvitsee suurempia määriä kuin hivenaineita.</li>
                <li>Esimerkkejä ovat kalsium, magnesium, natrium, kalium ja fosfori.</li>
            </ul>
            <ul><b>Hivenaineet (Mikro)</b>
                <li>Mikrokivennäisaineita elimistö tarvitsee hiukemman verrattuna makrokivennäisaineisiin.</li>
                <li>Esimerkkejä ovat rauta, kupari, sinkki, seleeni, jodi ja mangaani.</li>
            </ul>
        </p>
    </>}},

    {type:"subgroup", id:'kalsium', position:{x:300,y:450}, data:{
        name:'Kalsium', icon:"Ca", group:"Makrokivennäisaine",
        description:<>
            Kalsium on yleisin kivennäisaine elimistössä.
            <li>Kriittinen luuston ja hampaiden hyvinvoinnille.</li>
            <li>Välttämätön lihasten supistumiselle ja rentoutumiselle.</li>
            <li>Osallistuu veren hyytymisprosessiin.</li>
            <li>Säätelee solujen välistä viestintää ja signalointia.</li>
            <p/>D-vitamini auttaa kalsiumin imeytymistä suolistoon.
        </>, sources:[
            <><img src={tofu} style={{height:40, position:"absolute", transform:"translate(-6px, -10px)"}}></img>
                <span style={{whiteSpace:"pre"}}>       Tofu</span>
            </>, "🐟 Lohi", "🥛 Maitotuotteet", "🌱 Soijapavut", "🌿 Pinaatti"
        ]}},
    {type:"subgroup", id:'magnesium', position:{x:125,y:200}, data:{name:'Magnesium', icon:"Mg", group:"Makrokivennäisaine", description:<>
        Magnesium on tärkeä makrokivennäisaine monesta syystä.
        <li>Osana energiantuotantoa, erityisesti <span title="ATP">adenosiinitrifosfaatin</span> muodostamisessa.</li>
        <li>Välttämätön lihasten supistumiselle ja rentoutumiselle.</li>
        <li>Auttaa kalsiumia imeytymään, joka auttaa D-vitamiinia imeytymään.</li>
        <li>Vaadittu proteiinin synteesissä, mikä vaikuttaa solujen kasvuun ja korjaukseen.</li>
        <li>Parantaa stressinsietokykyä ja rentouttaa hermostoa.</li>
    </>}},
    {type:"subgroup", id:'natriumkalium', position:{x:120,y:350}, data:{name:'Natrium & Kalium', icon:"NaK", group:"Makrokivennäisaine", description:<>
        Natrium ja kalium ovat makrokivennäisaineita.
        Molemmat ovat elektrolyyttejä, jotka toimivat yhdessä ylläpitäen elektrolyyttitasapainoa elimistössä. Kummatkin osallistuvat hermoimpulssien siirtoon ja lihasten supistumiseen.
        
        <p>
            <ul><b>Natrium</b>
            <li>Säätelee kehon nestetasapainoa.</li>
            <li>Liika saanti voi kuitenkin nostaa verenpainetta ja aiheuttaa muita terveysongelmia.</li></ul>
            <ul><b>Kalium</b>
            <li>Vastaa solujen elektrolyyttitasapainosta pääosin solun sisällä.</li>
            <li>Osallistuu hermoimpulssien siirtoon ja lihasten supistumiseen.</li>
            <li>Kompensoi natriumin vaikutuksia verenpaineeseen ja ylläpitää sydämen terveyttä.</li></ul>
        </p>
    </>}},

    {type:"subgroup", id:'rauta', position:{x:650,y:420}, data:{name:'Rauta', icon:"Fe", group:"Mikrokivennäisaine", description:<>
        Rauta on tärkeä hivenaine, joka on välttämätön elimistölle.
        <li>Hemoglobiinissa on rautaa, joka kuljettaa happea keuhkoista kehon eri osiin.</li>
        <li>Rautaa on entysyymeissä, jotka osallistuvat energiantuotantoon ja aineenvaihduntaan.</li>
        <li>Rauta on immuunijärjestelmän normitoimintojen kannalta elintärkeä.</li>
        <li>Keho tarvitsee rautaa kasvuun ja kehittymiseen.</li>
        <p/>Rauta voidaan jakaa eläinkunnan tuotteista saatavaan hemirautaan ja kasvikunnan epirautaan.
    </>}},
    {type:"subgroup", id:'sinkki', position:{x:760,y:260}, data:{name:'Sinkki', icon:"Zn", group:"Mikrokivennäisaine", description:<>
        Sinkki on olennainen hivenaine, joka pitää elimistön kunnossa monella tavalla.
        <li>Välttämätön immuunijärjestelmän toiminnalle.</li>
        <li>Edistää haavojen ja vammojen paranemista.</li>
        <li>Ylläpitää makuaistia.</li>
        <li>Tarpeen näkökyvylle ja silmien terveydelle.</li>
    </>}},
    {type:"subgroup", id:'jodi', position:{x:640,y:120}, data:{name:'Jodi', icon:"I", group:"Mikrokivennäisaine", description:<>
        Jodi on tärkeä hivenaine kilpirauhaselle ja koko keholle.
        <li>Keskeinen osa kilpirauhashormoneja, jotka säätelevät aineenvaihduntaa ja vaikuttaa laajasti kehon soluihin.</li>
        <li>Riittävä jodin saanti on tärkeää raskaana oleville. Edistää sikiön aivojen ja hermoston kehitystä.</li>
        <li>Ehkäisee kilpirauhasen sairauksia, kuten <span title="kilpirauhasen liikakasvu">struuman.</span></li>
    </>}},
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

    {id:'glukoosi-sakkaroosi', type:"straight", source:'glukoosi', target:'sakkaroosi'},
    {id:'glukoosi-sakkaroosi', type:"straight", source:'fruktoosi', target:'sakkaroosi'},    


    {id:'root-suoja', type:"straight", source:'ravintoaineet', target:'suojaravintoaineet'},
    {id:'suoja-hiven', type:"straight", source:'suojaravintoaineet', target:'kivennaisaineet'},

    {id:"a", source:'kivennaisaineet', target:'kalsium'},
    {id:"b", source:'kivennaisaineet', target:'magnesium'},
    {id:"c", source:'kivennaisaineet', target:'natriumkalium'},
    {id:"d", source:'kivennaisaineet', target:'rauta'},
    {id:"e", source:'kivennaisaineet', target:'sinkki'},
    {id:"f", source:'kivennaisaineet', target:'jodi'},

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