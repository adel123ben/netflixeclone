import { isEmpty } from "lodash";
import MouvieCard from "./MouviCard";


interface MovieListeProps{
    
    title: string;
    
    

}




const MouviList: React.FC<MovieListeProps> = ({
   
    title,
    

}) => {

   

   return(
    <div className="px-4 md:px-12 mt-4 space-y-8">
        <div className="">
            <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
                {title}
            </p>
            <div className="grid grid-cols-4 gap-2">
                <div className="flex flex-row items-center gap-5">
    
    <MouvieCard data1="https://i.ytimg.com/vi/uYPbbksJxIg/maxresdefault.jpg" poster="https://fr.web.img5.acsta.net/pictures/23/05/26/16/52/2793170.jpg"  />
    
                </div>

                <div className="flex flex-row items-center gap-5">
    
    <MouvieCard data1="https://occ-0-360-114.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWWZkBJo9YiHd-pxOHM70heEzL7K8PSV0hvlnhyiPZsY9hUmAUTJ5un5o0qTGhBFmhOArEqtogqU9buADfGDMa7zCH3ddBmYODJN.jpg?r=6c4" poster="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABZBm0Qn8BlBd-nJvMzeykRtYD9VVNUCvAeBOpn-l2X_7Rxo2_thJhelIJGStenWp4bdElC4VZKFQwTBwoOEp28kSYc_qV9Seu_ql9zP9KAyjdBU-XlQvf9KsyHi4o9vFp-c3mQ.jpg?r=3a1"  />
    
                </div>

                <div className="flex flex-row items-center gap-5">
    
    <MouvieCard data1="https://aws1.vdkimg.com/film/1/3/5/4/1354083_backdrop_scale_1280xauto.jpg" poster="https://3.bp.blogspot.com/-1Evy7DwL5eM/WezmWEqnZlI/AAAAAAAAJSs/W7CaG_AtFWIBUETKg290qJI_gBXOTiJVACLcBGAs/s1600/Le%2Bretour%2Bde%2Bchucky%2Bposter%2Baffiche%2Bthe%2Bcult%2Bof%2Bchucky.jpg"  />
    
                </div>

                <div className="flex flex-row items-center gap-5">
    
    <MouvieCard data1="https://i.ytimg.com/vi/_EdGGgTBPYc/maxresdefault.jpg" poster="https://images.static-bluray.com/products/20/120008_2_large.jpg"  />
    
                </div>

                <div className="flex flex-row items-center gap-5 mt-10">
    
    <MouvieCard data1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNYU5Ckhh7wUdO2KhS8dY0abQKQMt-1irMZxPllxcMiAEpDE-QyNO_gE8H_oYPYSQLe2Y&usqp=CAU" poster="https://www.tallengestore.com/cdn/shop/products/LaCasaDePapel-MoneyHeist3-NetflixTVShowPosterArt_4a9828fe-c6a5-4ed0-9f85-6f85d7b1b156.jpg?v=1589788854" />
    
                </div>

                <div className="flex flex-row items-center gap-5 mt-10">
    
    <MouvieCard data1="https://cdn.idntimes.com/content-images/community/2023/06/my-fault-2023-ending-explained-unveiling-the-truth-aah1lxr6e5mcvm-e7ee0c44934dcaaf97cc2bffbb5be55b-51155ba87b90a265f8eb6cd009f5679e_600x400.jpg" poster="https://resizing.flixster.com/rdrsSTICtWBZZeuxy8a7_orEVOg=/300x300/v2/https://flxt.tmsimg.com/assets/p24531823_v_v13_ab.jpg" />
    
                </div>

                <div className="flex flex-row items-center gap-5 mt-10">
    
    <MouvieCard data1="https://www.silmarien.it/wp-content/uploads/2023/03/FAST-X-696x392.jpg" poster="https://www.silmarien.it/wp-content/uploads/2023/03/FAST-X-696x392.jpg" />
    
                </div>

                <div className="flex flex-row items-center gap-5 mt-10">
    
    <MouvieCard data1="https://images.justwatch.com/backdrop/302616058/s640" poster="https://flxt.tmsimg.com/assets/p16349597_p_v8_ab.jpg" />
    
                </div>

                
            </div>
        </div>
        
    </div>
   )
}

export default MouviList;