# Branches

**route_01**
<Route
          path="/registration"
          render={() => <Main insider={<Registration />} />}
        />

- renders Main and right-hand part(login,regoster,etc.) based on url
- rerenders Main each time url is changed 
