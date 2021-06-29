class AuthService {
  api_url = "https://54.191.193.83"

  async getTimes(userId: number) {
    try {
      const res = await (await fetch(`${this.api_url}/times/user/${userId}`, {
        method: "GET",
        credentials: 'include',
      })).json()
      return res.data
    } catch(err) {
      console.log('get time', err)
    }
  }

  async clockin(userId: number) {
    await fetch(`${this.api_url}/times/`, {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify({
        startTime: new Date().toISOString(),
        project: Math.random().toString(),
        note: Math.random().toString(),
        userId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  async clockout(userId: number, clockId: number) {
    await fetch(`${this.api_url}/times/`, {
      method: "PUT",
      credentials: 'include',
      body: JSON.stringify({
        endTime: new Date().toISOString(),
        id: clockId,
        userId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
}

export default new AuthService()