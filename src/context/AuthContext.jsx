import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

export const AuthContext = createContext()

function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem('caad-user')
      return storedUser ? JSON.parse(storedUser) : null
    } catch (error) {
      console.error('Failed to read stored user:', error)
      localStorage.removeItem('caad-user')
      return null
    }
  })

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('caad-user', JSON.stringify(user))
      } else {
        localStorage.removeItem('caad-user')
      }
    } catch (error) {
      console.error('Failed to persist user:', error)
    }
  }, [user])

  const login = useCallback(({ email, password }) => {
    setUser({
      name: email.split('@')[0] || 'Customer',
      email,
      password,
    })
  }, [])

  const register = useCallback(({ name, email, password }) => {
    setUser({ name, email, password })
  }, [])

  const logout = useCallback(() => {
    setUser(null)
  }, [])

  const value = useMemo(
    () => ({
      user,
      login,
      register,
      logout,
    }),
    [user, login, register, logout]
  )

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
