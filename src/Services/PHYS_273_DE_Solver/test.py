import numpy as np
from scipy.integrate import odeint
import matplotlib.pyplot as plt

def DuffingEquation(x_vector, t, alpha, beta, delta, gamma, omega):
    x,v = x_vector
    dydt = [v, -delta*v - alpha*x - beta*x**3 + gamma*np.cos(omega*t)]
    return dydt

alpha=1
beta=0.25
delta=0.1
gamma=2.5
omega=2

x_vector_inital = [0,0]
t = np.linspace(0, 10, 101)
sol = odeint(DuffingEquation,x_vector_inital, t, args=(alpha, beta, delta, gamma, omega))
import matplotlib.pyplot as plt
print(sol)
plt.plot(t, sol[:, 0], 'b', label='x(t)')
plt.plot(t, sol[:, 1], 'g', label='v(t)')
plt.legend(loc='best')
plt.xlabel('t')
plt.grid()
plt.show()