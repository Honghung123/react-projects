import { useState, useEffect, useRef, useEffectEvent, useLayoutEffect, memo, useCallback, useMemo, useContext } from "react";

import logo from "./logo.svg";
import "./App.css";

// Routers
import {Routes, Route, Link} from 'react-router-dom'

import Button from "./components/Button";
import Expenses from "./components/Expenses";
import { useImmer } from "use-immer"; // Update array or object to not be tedious 
import ChildComponent from "./components/ContentMemo";
import MyTask from "./components/Todo";
import ChangeThemeUsingContext from "./components/ThemeContext/context";
import { TaskContext, TaskProvider, useTask, actions } from "./components/ReducerWithContext"; 
import Media from "./components/Video/media";
import Heading from "./components/Module/Heading";
import Paragraph from "./components/Module/Paragraph";
import GlobalStyles from "./components/GlobalStyles";
import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";
import BlogPage from "./pages/Blog";


function handleClickEvent(event) {
  alert("You have clicked this button");
}

function WelcomeMessage(props) {
  return (
    <p>
      <b>{props.message}</b> {props.user}
    </p>
  );
}
// Cach 2:
// function WelcomeMessage({message, user}) {
//   return (<p><b>{ message }</b> { user }</p>);
// }

function OneProp(prop) {
  return <p>This is one props: {prop.name.join(" - ")}</p>;
}

function SpecialProp(prop) {
  return <b>* * * * * {prop.children} * * * * *</b>;
}

function ChangeName({ setName, who }) {
  return (
    <div>
      <button
        onClick={() => setName(who === "Hung Rose" ? "Hong Hung" : "Hung Rose")}
      >
        Change name
      </button>
    </div>
  );
}

function SimpleForm(props) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/form", {
      body: JSON.stringify({
        username: props.username,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        type="text"
        name="username"
        value={props.username}
        className="text-green-500 placeholder::text-slate-500"
        onChange={(event) => props.setUsername(event.target.value)}
        placeholder="Enter username"
      ></input>
      <label className="block">
        <span className="block text-sm font-medium text-white-700">Email</span>
        <input
          type="text"
          value="hung@gmail.com"
          disabled
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "
          onChange={() => {}}
        />
      </label>
      <label className="block">
        <span className="block text-sm font-medium text-white-700">
          Phone number
        </span>
        <input
          type="text"
          value="0123456789"
          invalid="true"
          className="text-slate-700 mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "
          onChange={() => {}}
        />
      </label>
      <label className="block">
        <span className="block text-sm font-medium text-white-700">
          Address
        </span>
        <input
          type="text"
          value="Ho Chi Minh City"
          className="text-slate-700 mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "
          onChange={() => {}}
        />
      </label>
    </form>
  );
} 

function MyExpense() {
  const expenseToday = [
    { title: "Expense A", amount: 300000, date: new Date() },
    { title: "Expense B", amount: 400000, date: new Date() },
    { title: "Expense C", amount: 500000, date: new Date() },
  ]
  return (
    <div className="container">
      <Expenses items={expenseToday} />
    </div>
  )
}

function Timer() {
  const [time, setTime] = useState(new Date());
  const timeString = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  useEffect(() => {
    setInterval(() => {
      setTime(prevState => new Date())
    }, 1000);
  })
  return <h3 className="bg-sky-200 font-bold">Current time: {timeString}</h3>;
}

function Counter() {
  const [score, setScore] = useState(0);

  function increment() {
    setScore(score => score + 1);
    // setScore(score + 1); // Will only effect once of each times when there are many same callback setScore()
  }

  return (
    <>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</button>
      <h1>Your Score: {score}</h1>
    </>
  )
} 

function BucketList() {
  const [list, setList] = useImmer([
    { id: 0, title: "Big Bellies", seen: false },
    { id: 1, title: "Lunar Landscape", seen: false },
    { id: 2, title: "Terracotta Army", seen: true },
  ]);

  function handleToggle(artworkId, checked) {
    // setList(list.map(artwork => {
    //   if (artwork.id === artworkId) {
    //     return { ...artwork, seen: checked };
    //   } else {
    //     return artwork;
    //   }
    // }));
    setList(list => {
      const draft = list.find(artwork => artwork.id === artworkId);
      draft.seen = checked; 
    })
  }

  return (
    <div className="ring-1 ring-lime-300">
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={list}
        onToggle={handleToggle} />
    </div>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

function FormCourseSelect() {
  const courses = [
    {id: 1, name: "React JS", price: 134000}, 
    {id: 2, name: "Vue JS" , price: 134000}, 
    {id: 3, name: "Angular", price : 134000}, 
  ] 
  const [checked, setChecked] = useState([]);
  const handleSubmit = () => { 
    console.log({id: checked});
  }
  const handleCheck = (id) => { 
    setChecked(prev => {
      if (prev.includes(id)) {
        return checked.filter(courseId => courseId !== id)
      } else {
        return [...prev, id]
      }
    });
  }
  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            name="course"
            onChange={() => handleCheck(course.id)}
            checked={checked.includes(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="bg-sky-500 px-6 py-4 ring ring-rose-300 "
      >
        Register
      </button>
    </>
  );
}

function Todo({ todo, events, children }) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(todo); 
  const todoContent = isEditing ? (
    <>
      <input
        value={currentTodo.name}
        className="text-black"
        onChange={(e) => {
          setCurrentTodo({ ...currentTodo, name: e.target.value });
        }}
      />
      <span
        onClick={() => {
          events.handleSaveTodo(currentTodo);
          setIsEditing(false);
        }}
      >
        Save
      </span>
    </>
  ) : (
    <>
      <input
        type="checkbox"
        onChange={() => events.handleCheckTodo(currentTodo.id)}
        checked={currentTodo.isDone}
      />
      {todo.name}
      <span
        onClick={() => setIsEditing(!isEditing)}
        className="px-6 inline-block"
      >
        Edit
      </span>
      <span onClick={() => events.handleRemoveTodo(currentTodo.id)}>
        Remove
      </span>
    </>
  );
  return (
    <li key={currentTodo.id}>
      {todoContent} 
    </li>
  );
}

function TodoList() { 
  const [todoName, setTodoName] = useState("")
  const [todoList, setTodoList] = useState(() => {
    const oldList = JSON.parse(localStorage.getItem("todoList")) ?? [];
    return oldList;
  })
  const countRef = useRef(() => {
    return todoList.length > 0 ? todoList[todoList.length - 1].id : 1;
  });
  localStorage.setItem("todoList", JSON.stringify(todoList));
  const handleAddTodo = () => { 
    countRef.current += 1;
    const newTodo = {
      id: countRef.current,
      name: todoName,
      idDone: false
    }
    const newTodoList = [...todoList, newTodo]
    setTodoList(newTodoList);
    setTodoName("");
  }
  const handleCheckTodo = (id) => {
    const todo = todoList.find(todo => todo.id === id);
    todo.isDone = !todo.isDone; 
    setTodoList([...todoList ]);
  }
  const handleRemoveTodo = (id) => { 
    setTodoList(todoList.filter(todo => todo.id !== id))
  } 
  const handleSaveTodo = (savedTodo) => {
    const index = todoList.findIndex(todo => todo.id === savedTodo.id);
    todoList[index] = {...savedTodo}
    setTodoList([...todoList]);
  }

  const events = {  
    handleSaveTodo,
    handleCheckTodo, 
    handleRemoveTodo,
  }
  return (
    <>
      <div className="todo-container space-y-6 border border-xm border-rose-300">
        <div className="todo-input">
          <input
            className="text-black"
            type="text"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
          <button
            onClick={handleAddTodo}
            className="px-4 py-2 bg-lime-500 ring hover:bg-lime-300"
          >
            Add Todo
          </button>
        </div>
        <ul className="todo-list">
          {todoList.length > 0 ? (
            todoList.map((todo) => (
              <Todo key={todo.id} todo={todo} events={events}> 
              </Todo>
            ))
          ) : (
            <li>There is no todo here. Please add new!</li>
          )}
        </ul>
      </div>
    </>
  );
}

function getNumberItemInAList(list, start, number) {
  return list.slice(start, start + number);
}

const tags = [
  { title: "Albums", url: "albums", params:"albumId" },
  { title: "Posts", url: "posts", params:"postId" },
  { title: "Photos", url: "photos", params:"photoId" },
  { title: "Todos", url: "todos" , params:"todoId"},
]
const baseUrl = "https://jsonplaceholder.typicode.com";
function Comment() { 
  const [list, setList] = useState([]);
  const [tag, setTag] = useState(tags[0]); 
  const [itemId, setItemId] = useState(1);
  useEffect(() => {
    const url = `${baseUrl}/${tag.url}`
    fetch(`${url}?${tag.params}=${itemId}`)
      .then((response) => response.json())
      .then(data => setList(data));
  }, [itemId, tag])
  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then(data => setList(data));
  // }, [])
  const handleTagClick = (t) => {
    setTag({ ...t }); 
  }
  const commonClass = "px-2 py-4 mx-6 hover:bg-violet-300";
  return (
    <div className="border border-sm border-rose-300">
      <div>
        {tags.map((t) => (
          <button
            type="button"
            className={
              t.url === tag.url
                ? "bg-violet-300 " + commonClass
                : "bg-violet-500 " + commonClass
            }
            onClick={() => handleTagClick(t)}
            key={t.url}
          >
            {t.title}
          </button>
        ))}
        <h3 className="text-orange-300 font-bold">Select {tag.title}</h3>
        <select
          className="text-black"
          onClick={(e) => setItemId(e.target.value)}
        >
          {list.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
      <h4 className="text-lime-500 font-bold">Comment about this post: </h4>
      {/* <div className="comment-section py-6">
        {comments.map((comment) =>
          <div key={comment.id}>
            <p className="text-yellow-500 font-bold">{comment.name} - {comment.email}</p>
            <p className="italic font-slate-500">{comment.body}</p>
          </div>)}
      </div> */}
    </div>
  );
}

function GoOnTop() {
  const [show, setShow] = useState(false);
  useEffect(() => { 
    const handleScroll = () => { 
      setShow(window.scrollY > 300);  
    }
    window.addEventListener('scroll', handleScroll); 
    // Clean up function - run each re-render. Avoid memory leak or updating state for unmounted component
    return () => window.removeEventListener('scroll', handleScroll);
  }, []) 
  return (
    <>
      {show && (
        <a
          href="#"
          className="fixed inline-block py-2 px-4 right-[1rem] bottom-2 rounded-lg bg-lime-700 text-white hover:bg-lime-400"
        >
          Go to top
        </a>
      )}
    </>
  );
} 

function PreviewUploadImage() {
  const [image, setImage] = useState();
  useEffect(() => { 

    // Clean the last uploaded image
    return () => {
      image && URL.revokeObjectURL(image.preview)
    }
  }, [image])
  const handleUploadFile = (e) => { 
    const file = e.target.files[0];  
    file.preview = URL.createObjectURL(file);
    setImage(file);
  } 
  return (
    <div className="border border-yellow-300 rounded-lg">
      <input type="file" onChange={handleUploadFile} />
      <h4>Preview image: </h4>
      {image && <img src={image.preview} alt={image.name} width={200} height={100} />}
    </div>
  );
}

const myChannelList = [
  {id: 1, name: 'React JS channel'},
  {id: 2, name: 'Angular channel'},
  {id: 3, name: 'Vue JS channel'},
]
function Channel() {
  const [channelList, setChannelList] = useState(myChannelList);
  const [channelId, setChannelId] = useState(1); 
  const handleSwitchChannel = (id) => {
    console.log("Switch channel to " + id);
    setChannelId(id);
  } 
  return (
    <>
      {channelList.map((channel) => (
        <button
          key={channel.id}
          onClick={() => handleSwitchChannel(channel.id)}
          className={
            "px-4 py-2 " + (channel.id === channelId
              ? "bg-sky-300"
              : "bg-sky-500 hover:bg-sky-300")
          }
        >
          {channel.name}
        </button>
      ))}
      <ChatApp channelId={channelId} />
    </>
  );
} 

function ChatApp({ channelId }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  useEffect(() => { 
    const handleComment = (event) => {
      console.log(event.detail);
    }
    window.addEventListener(`channel-${channelId}`, handleComment);
    return () => window.removeEventListener(`channel-${channelId}`, handleComment);
  }, [channelId])
  const handleSend = () => {
    setMessages([...messages, input]);
    setInput("");
  }
  return (
    <>
      <input className="text-black" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSend}>Send</button>
      <ul>{messages.map((msg, index) => <li key={index} >{ msg }</li>) }</ul>
    </>
  )
}


function Counters() {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0)
    }
  }, [count])
  const handleRun = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  console.log("Parent Component Render or re-render");

  return (
    <>
      <ChildComponent onClick={ handleRun } />
      <h1>Current count: { count }</h1>
      
    </>
  )
}

function Shopping() {
  const [productList, setProductList] = useState([]);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("")
  const proNameRef = useRef();
  const handleAddToList = () => {
    const newProduct = { name: productName, price: +price };
    setProductList([...productList, newProduct]);
    setPrice("")
    setProductName("")
    proNameRef.current.focus();
  }
  // useMemo avoid unnecessary re-render logic function when the component is rendered, it's only rerender when its dependencies are changed. If there is no dependency, it will run only once when the component is mounted
  const totalPrice = useMemo(() => {
    const total = productList.reduce((accumulator, product) => accumulator + product.price, 0);
    console.log("This callback called");
    return total;
  }, [productList])
  return (
    <>
      Product name: <input className="text-black" ref={ proNameRef } value={productName} onChange={(e) => setProductName(e.target.value)} />
      Price: <input className="text-black" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button onClick={handleAddToList}>Add to list</button>
      <h3>Total:  { totalPrice }</h3>
      <ul>
        {productList.map((product, index) => <li key={index}>{ product.name } - {product.price}</li>)}
      </ul>
    </>
  )
}

function DemoUseContext() {
  return (
    <ChangeThemeUsingContext />
  )
}

function GlobalStateWithReducerAndContext() {
  const [state, dispatch] = useTask();
  const { todo, todos } = state;
  return (
    <div className="border-2 border-slate-300 my-4">
      <h3>A simple global state using useReducer and useContext</h3>
      <input
        className="text-black"
        value={todo}
        placeholder="Add new task"
        onChange={(e) => dispatch(actions.setTask(e.target.value))}
      />
      <button onClick={() => dispatch(actions.addTask(todo))}>Add</button>
      <h3>List of tasks: </h3>
      {todos.map((t, index) => <li key={index}>Task {index} - {t}
        <span className="inline-block mx-2 hover:cursor-pointer" onClick={() => dispatch(actions.removeTask(index)) }>&times;</span></li>)}
    </div>
  );
}

function HookUseImperactiveHandle() {
  return (
    <Media />
  )
}

function UsingCSS() {
  
  return (
    <>
      <div
        className="py-4 my-2 bg-sky-500"
        style={{ borderRadius: ".5rem", width: "100%" }}
      >
        <p>
          This is an element using Inline CSS: use
          <i className="text-red">style property</i>
        </p>
      </div>
      <div
        className="py-4 my-2 bg-sky-500 header"
        style={{ borderRadius: ".5rem", width: "100%" }}
      >
        <p>
          This is an element using{" "}
          <b className="text-gradient reverse">Internal CSS when in Development environment {"=>"} External when in Production: npm run build </b>: npm start: use{" "}
          <b>style tag element</b> by declaring some class in a file CSS and
          import it. Example: .heading is declared in App.css
        </p>
      </div>
    </>
  );  
}

function CSSModule() {
  return (
    <GlobalStyles>
      <Paragraph />
      <Heading />
    </GlobalStyles>
  );
}

function Navigation() {
  return (
    <nav>
      <ul>
        {/* <li><a className="text-gradient font-bold hover:ring hover:ring-violet-300" href="/">Home</a></li>
        <li><a className="text-gradient font-bold hover:ring hover:ring-violet-300" href="/shop">Shop</a></li>
        <li><a className="text-gradient font-bold hover:ring hover:ring-violet-300" href="/blog">Blog</a></li> */}
        <li><Link to="/" className="text-gradient font-bold hover:ring hover:ring-violet-300">Home</Link></li>
        <li><Link to="/shop" className="text-gradient font-bold hover:ring hover:ring-violet-300">Shop</Link></li>
        <li><Link to="/blog" className="text-gradient font-bold hover:ring hover:ring-violet-300">Blog</Link></li>
      </ul>
    </nav>
  )
}

function App() {  
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Hung Rose");
  const [username, setUsername] = useState("");
  const [lastCount, setLastCount] = useState([]); 
  const reactLogo =
    "https://www.ethode.com/contentAsset/image/84e3be24-58bc-499c-9d50-f8088158f11a/image/filter/Resize/resize_w/1024";
  useEffect(() => {
    console.log(`You have changed watched variable: ${name}`);
  }, [name]);
  const increment = (step) => {
    setCount( count => count + step);
  };
  // setInterval(() => {
  //   setCurrentTime(new Date());
  // }, 1000);
  return (
    <div className="App selection:bg-fuchsia-300">
        <Timer />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage /> } />
        <Route path="/shop" element={<ShopPage /> } />
        <Route path="/blog" element={<BlogPage /> } />
      </Routes>
      <header className="App-header"> 
        <UsingCSS />
        <CSSModule />
        <TaskProvider>
          <GlobalStateWithReducerAndContext />
        </TaskProvider>
        <HookUseImperactiveHandle />
        <MyTask />
        <DemoUseContext />
        <Counters /> 
        <Shopping />
        <TodoList />
        <PreviewUploadImage />
        <Channel /> 
        <Comment />
        <FormCourseSelect />
        <Counter />
        <BucketList />
        <h1 className="text-yellow-300">Simple program - Counter</h1>
        <p className="text-white-300 flex items-center justify-center">
          Current value: {count}
        </p>
        <p className="empty:hidden">
          This element will not hidden because it has content in it
        </p>
        <p className="empty:hidden"></p>
        <p className="text-white-300">History: {lastCount.join(" -> ")}</p>
        <Button step={10} increment={increment} title="+ 10" />
        <Button step={50} increment={increment} title="+ 50" />
        <Button step={-30} increment={increment} title="- 30" />
        <button
          className="text-pink-400 hover:bg-sky-700 focus:ring focus:outline-none focus:ring-violet-300 px-3 rounded"
          onClick={() => setLastCount([...lastCount, count])}
        >
          Save
        </button>
        <button
          className="dark:md:hover:bg-yellow-600"
          onClick={() => {
            setCount(0);
            lastCount.length = 0;
          }}
        >
          Reset
        </button> 
        <GoOnTop />
        <div className="bg-slate-100 container sm:container-sm md:container-md lg-container-lg xl:container-xl .bg-stripes-purple">
          <div className="w-48 h-48 bg-rose-300"></div>
        </div>
        <MyExpense />
        <div className="gallery container">
          <h1 className="text-center">My gallery</h1>
          <div className="columns-[20rem] gap-8">
            <img
              className="aspect-auto md:aspect-square lg:aspect-video w-full overflow-hidden hover:break-after-column"
              src="https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2936&q=80"
            />
            <img
              className="aspect-auto md:aspect-square lg:aspect-[9/14] w-full overflow-hidden object-fill sm:object-none hover:object-contain object-center"
              src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            />
            <img
              className="aspect-auto md:aspect-square lg:aspect-video w-full overflow-hidden object-cover object-right-bottom hover:object-left-top sm:object-[center_bottom]"
              src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2936&q=80"
            />
            <img
              className="aspect-auto md:aspect-square lg:aspect-[5/6] w-full overflow-hidden hover:break-before-column object-scale-down"
              src="https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
            />
            <img
              className="aspect-auto md:aspect-square lg:aspect-square w-full overflow-hidden object-contain"
              src="https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2936&q=80"
            />
          </div>
        </div>
        <div className="flex items-center content-center md:overflow-x-hidden sm:overflow-visible overflow-hidden">
          <span className="box-decoration-slice hover:box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
            Hello
            <br />
            World
          </span>
        </div>
        <div className="container py-6">
          <img
            src="https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2936&q=80"
            className="w-48 aspect-video float-none rounded-[.75rem] lg:float-left"
          />
          <img
            src="https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2936&q=80"
            className="w-48 aspect-video float-right rounded-[.75rem]"
          />
          <p className="clear-start sm:clear-both h-24 overflow-auto md:overscroll-contain overscroll-none">
            Maybe we can live without libraries, people like you and me. Maybe.
            Sure, we're too old to change the world, but what about that kid,
            sitting down, opening a book, right now, in a branch at the local
            library and finding drawings of pee-pees and wee-wees on the Cat in
            the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
            Look. If you think this is about overdue fines and missing books,
            you'd better think again. This is about that kid's right to read a
            book without getting his mind warped! Or: maybe that turns you on,
            Seinfeld; maybe that's how y'get your kicks. You and your good-time
            buddies.
          </p>
        </div>
        <img
          src={logo}
          alt={reactLogo}
          className="App-logo mx-auto h-16 z-10 md:z-40 rounded-full fixed md:hover:top-full lg:right-[4rem] md:top-0 md:right-0"
        />
        <p
          className="text-red-500 bg-yellow-500 hover:bg-white hover:font-bold"
          style={{ fontSize: "2rem", transform: "skewY(2deg)" }}
        >
          You clicked on below button {count} times!.
        </p>
        <button className="" onClick={handleClickEvent}>
          Click
        </button>
        <SimpleForm username={username} setUsername={setUsername} />
        <OneProp name={[name, "Nguyen Huy Hoang"]} />
        <div>
          <p>You will change random name when clicking button below: </p>
          <ChangeName setName={setName} who={name} />
        </div>
        <WelcomeMessage message="Welcome!" user="Dam Hong Hung" />
        <SpecialProp>
          <center>
            <i>This is special prob called Children</i>
          </center>
        </SpecialProp>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
