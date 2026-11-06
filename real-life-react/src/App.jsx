import Navbar from "./tasks/NavBar";
import ProductCard from "./tasks/ProductCard";
import WeatherCard from "./tasks/WeatherCard";
import OrderTracker from "./tasks/OrderTracker";
import InboxTitle from "./effects/InboxTitle";
import QuizTimer from "./effects/QuizTimer";
import UserProfile from "./effects/UserProfile";
import ScreenSize from "./effects/ScreenSize";
import AutoSaveNote from "./effects/AutoSaveNote";

import "./App.css";


function App() {
  return (
    <div>
      <h1>Conditional Rendering Workbook</h1>

      {/* NAVBAR TESTS */}
      <h2>1. Navbar</h2>

      <Navbar user={null} notifications={0} />
      <Navbar user={{ name: 'Maria', role: 'member' }} notifications={0}/>
      <Navbar user={{ name: 'Jamal', role: 'member' }} notifications={3} />
      <Navbar user={{ name: 'Priya', role: 'admin' }} notifications={12} />
      
      <h2>2. Product Cards</h2>

      <ProductCard name="Hoodie" price={45} stock={20}/>
      <ProductCard name="Headphones" price={60} salePrice={30} stock={3}/>
      <ProductCard name="Phone case" price={15} stock={0}/>
      <ProductCard name="Sneakers" price={120} salePrice={89.99} stock={5}/>

      <h2>3. Weather Cards</h2>

      <WeatherCard city="Newark" tempF={28} condition="snow" windMph={10} />
      <WeatherCard city="Newark" tempF={45} condition="rain" windMph={30}/>
      <WeatherCard city="Newark" tempF={68} condition="sunny" windMph={5}/>
      <WeatherCard city="Newark" tempF={88} condition="cloudy" windMph={26}/>
      <WeatherCard city="Newark" tempF={32} condition="rain" windMph={0}/>

      <h2>4. Order Tracker</h2>

      <OrderTracker status="placed" etaMinutes={35} />
      <OrderTracker status="preparing" etaMinutes={25} />
      <OrderTracker status="on_the_way" etaMinutes={12} />
      <OrderTracker status="delivered" etaMinutes={0} />
      <OrderTracker status="cancelled" etaMinutes={0} />

      <h1>useEffect Workbook</h1>

      <h2>Task 1: Inbox tab title</h2>
      <InboxTitle />

      <h2>Task 2: Quiz countdown timer</h2>
      <QuizTimer />

      <h2>Task 3: User profile from an API</h2>
      <UserProfile />

      <h2>Task 4: Screen size detector</h2>
      <ScreenSize />

      <h2>Task 5: Auto-saving note</h2>
      <AutoSaveNote />
     
    </div>
  );
}

export default App;