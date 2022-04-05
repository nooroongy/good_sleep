import '../css/barGraph.css'

const BarGraph = ({ datas }) => {
    const getBar = (data, key) => {
        const { height, col, color } = data;
        return <span className='graph__data' key={key}>
            <span className={'graph__bar graph__rating' + color + ' graph__sleeptime sub-color'}
                style={{ height: height > 80 ? 80 : height + 'px' }}>
            </span>
            <span className='graph__date'>{col}</span>
        </span>
    }

    return <div className='graph__wrap'>
        {datas.map((data, key) => {
            return getBar(data, key)
        })}
    </div>
}

export default BarGraph;