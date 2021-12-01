# Branches

**route_01**
<Route
          path="/registration"
          render={() => <Main insider={<Registration />} />}
        />

- renders Main and right-hand part(login,regoster,etc.) based on url
- rerenders Main each time url is changed

**route_02**
- no Switch is used so all matches are rendered
- renders fuzz or main with other matching paths based on auth
-  
