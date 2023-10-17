from DuffingEquationSolver import DuffingEquation

testEquation = DuffingEquation(alpha=1, beta=0.25, delta=0.1, gamma=2.5, omega=2)
print(testEquation.ode_solve(0, 10, 101, [0,0]))