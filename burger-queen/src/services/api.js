const url = 'https://bq-api-2022.herokuapp.com'

const token = localStorage.getItem("token")

const header = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
  },
};

const roleUser = localStorage.getItem("role");

const id = localStorage.getItem("idUser");


const apiData = {
  url,
  header,
  roleUser,
  id
}

export default apiData

