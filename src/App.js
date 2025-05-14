import React, {useState, useEffect} from "react";
import axios from "axios";
import './App.css';
import Coin from "./Coin";
import ScrollToTop from "./ScrollToTop";


function App() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => {
            setCoins(res.data); 
        }).catch(error => alert("vous n'avez pas accès"));
    }, []);

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin => 
        coin.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className="coin-app">
        <div className="coin-search">
            <h1 className="coin-text">Cours des CRYPTOS</h1>
            <form>
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="coin-input" 
                    onChange={handleChange}
                />
            </form>
        </div>
        {filteredCoins.length === 0 ? (
            <div className="no-results">
                <p>Aucune crypto-monnaie trouvée pour "{search}"</p>
            </div>
        ) : (
            filteredCoins.map((coin) => {
                if (!coin) return null;
                
                return (
                    <Coin
                        key={coin.id}
                        name={coin.name || ''}
                        image={coin.image || ''}
                        price={coin.current_price || 0}
                        symbol={coin.symbol || ''}
                        marketcap={coin.market_cap || 0}
                        priceChange={coin.price_change_percentage_24h || 0}
                        volume={coin.total_volume || 0}
                    />
                );
            })
        )}
        <ScrollToTop />
    </div>
  );
}

export default App;
