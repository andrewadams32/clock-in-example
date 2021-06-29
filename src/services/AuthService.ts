class AuthService {
  api_url = "https://54.191.193.83"
  
  async login(creds: { email: string, password: string }){
    const res = await fetch(`${this.api_url}/auth/login`, {
      method: "POST",
      body: JSON.stringify(creds),
      credentials: 'include',
      headers: {
        'Content-Type': "application/json"
      }
    })
    const user = await res.json() // user (if successful)
    return user.data
  }

  async signup(creds: { email: string, password: string }){
    const res = await fetch(`${this.api_url}/auth/signup`, {
      method: "POST",
      body: JSON.stringify(creds),
      headers: {
        'Content-Type': "application/json"
      }
    })
    await this.login(creds)
    const user = await res.json()
    return user.data
  }

  async logout() {
    await fetch(`${this.api_url}/auth/logout`, {
      method: "POST",
      credentials: 'include',
    })
  }
  async getMe() {
    try {
      const res = await (await fetch(`${this.api_url}/users/me`, {
        method: "GET",
        credentials: 'include',
      })).json()
      return res.data
    } catch(err) {
      console.log('get me', err)
      return {}
    }
  }
}

export default new AuthService()