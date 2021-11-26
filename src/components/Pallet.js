import ColorSample from "./ColorSample";

const Pallet = ({noSet,category}) =>{
    return <div className='pallet-wrap'>
        {
            noSet.map(no=>{
                return <ColorSample category={category} no={no} key={no}/>
            })
        }
    </div>
}

export default Pallet;