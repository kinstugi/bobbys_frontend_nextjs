import axios from "axios"

const getQuizCard = async (pack=1, count= 5) => {
    return await fetch(`https://localhost:7129/api/quiz/cards?number=${count}&pack=${pack}`).then((response)=>{
        return response.json()
    }).catch(err=> {throw Error(err)})
}

const getOtherCards = async (pack=1, count=5, mode="learning") => {
    var token  = localStorage.getItem('api-auth-token')
    if (token == '' || token == null) throw Error('please login')

    const options = {
        method: 'GET',
        url: `https://localhost:7129/api/${mode}/cards`,
        params: {pack: `${pack}`, number: `${count}`},
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      
      return axios.request(options).then(function (response) {
        return response.data
      }).catch(function (error) {
        throw Error(error)
      });
}

const questionFetchMap = {
    quiz: (cnt=5, pk=1)=> getQuizCard(pk, cnt),
    learning: (cnt=5, pk=1) => getOtherCards(pk, cnt, 'learning'),
    interview: (cnt=5, pk=1) => getOtherCards(pk, cnt, 'interview')
}

export default questionFetchMap