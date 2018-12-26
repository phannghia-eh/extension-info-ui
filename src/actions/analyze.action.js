import axios from 'axios'
import config from '../config'

const BASE_ANALYZE_API_URL = config.BASE_API_URL + 'analyze/'

export function sendAnalyzeRequest(extensionLink) {
  return async dispatch => {
    dispatch(startAnalyze())
    return axios
      .post(BASE_ANALYZE_API_URL, {link: extensionLink})
      .then(response => {
        console.log(response)
        if (response.data.result)
          dispatch(updateAnalyzeResult(JSON.parse(response.data.result)))
      })
      .catch(error => {
        console.error(error)
      })
  }
}

export function changeViewState(state) {
  return dispatch => {
    dispatch(changeView(state))
  }
}

const changeView = state => ({
  type: 'CHANGE_VIEW_STATE',
  payload: {state: state}
})

const startAnalyze = () => ({
  type: 'SEND_ANALYZE_REQUEST',
})

const updateAnalyzeResult = (result) => ({
  type: 'UPDATE_ANALYZE_RESULT',
  payload: {result: result}
})