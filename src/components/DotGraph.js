import '../css/dotGraph.css'

const DotGraph = ({ datas }) => {
    return <div className='dotgraph__wrap'>
        <div className='dotgraph__box'>
            <span className='dotgraph__horizontal-wrap sub-color'>
                <span className='dotgraph__horizontal-line'></span>
                <span className='dotgraph__horizontal-line'></span>
                <span className='dotgraph__horizontal-line'></span>
                <span className='dotgraph__horizontal-line'></span>
                <span className='dotgraph__horizontal-line'></span>
            </span>
            <span className='dotgraph__vertical-wrap sub-color'>
                <span className='dotgraph__vertical-line'></span>
                <span className='dotgraph__vertical-line'></span>
                <span className='dotgraph__vertical-line'></span>
                <span className='dotgraph__vertical-line'></span>
                <span className='dotgraph__vertical-line'></span>
                <span className='dotgraph__vertical-line'></span>
                <span className='dotgraph__vertical-line'></span>
                <span className='dotgraph__vertical-line'></span>
            </span>
            <span className='dotgraph__time-tx'>time</span>
            <span className='dotgraph__rating-tx'>rating</span>
            {datas.map((data, i) => {
                const { posX, posY } = data;

                return <span className='dotgraph__dot main-color'
                    style={{ bottom: posY, left: posX }} key={i}
                ></span>
            })}
        </div>
    </div>
}

export default DotGraph;