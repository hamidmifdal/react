import { useState } from 'react'
const  App = () => {

    const [read ,setRead] = useState([{
        book : "atomic",
        code : "012029"
    },{
        book : "art of worldz",
        code : "350092"
    }])
    const [text,setText]     = useState("")
    const [code,setCode]     = useState("")
    const [backup,setbackup] = useState(read)
    const delete_article = (book) =>{
        setRead([...read.filter(item => item.book !== book)])
        setbackup([...backup.filter(item => item.book !== book)])
    }
    const mv = (book) => {
        if(book !== ""){
            setRead([...read.filter(item => item.book.toLowerCase().includes(book.toLowerCase()))])

        }else{
            setRead([...backup])
        }
    }
    

    return (
        <div className="App">
            <header className="App-header">
                <h1>React and flask</h1>
                <input type="text" placeholder='search book ?' onChange={t => mv(t.target.value)}/>
                <input type="text" placeholder='post book ?' value={text} onChange={(event) => setText(event.target.value)}/>
                <input type="text" placeholder='post code ?' value={code} onChange={(event) => setCode(event.target.value)}/>
                <button onClick={
                    ()=> setRead([...read,{book : text, code : code}],
                    setbackup([...backup,{book : text, code : code}])
                    
                    )}>Post</button>
                {read.map((i) => (
                    <>
                    <h1>Book: {i.book}</h1>
                    <h1>Code: {i.code}</h1>
                    <button className='btn btn-warning' onClick={() => delete_article(i.book)} >delete</button>
                    </>
                ))}
            </header>
        </div>
    );
}

export default App;
