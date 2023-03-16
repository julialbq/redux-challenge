import axios from "axios"
import { apiUrl } from "./apiUrl"

export const postQuiz = async (quiz) => {
  try {
    const response = await axios.post(`${apiUrl}/quizzes`, {quiz})
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}
