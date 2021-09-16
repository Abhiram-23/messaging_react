import './index.css'
import moment from 'moment'

const FilterData = props => {
  const {allData} = props

  function moments(date) {
    return moment(date).fromNow()
  }

  return (
    <div className="allMessages">
      {allData.map(eachData =>
        eachData.sender === 'agent' ? (
          <li className="agentMessage">
            <div className="imageAndMessage">
              <p>{eachData.message}</p>
            </div>
            <p className="timeSince">{moments(eachData.createdAt)}</p>
          </li>
        ) : (
          <li className="userMessage">
            <div className="imageAndMessage">
              <p>{eachData.message}</p>
            </div>
            <p className="timeSince">{moments(eachData.createdAt)}</p>
          </li>
        ),
      )}
    </div>
  )
}
export default FilterData
