export const Filter = ({ setName, appName }) => {

    return <div>
        <input type="text" value={appName} onChange={(e) => setName(e.target.value)} placeholder="App name" />
        <input type="text" placeholder="App category" />
    </div>
}