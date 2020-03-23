import React,{Component} from 'react';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dataList: [],
         }
    }

    componentDidMount(){
        this.loadData();
    }

    loadData= async() =>{
        //sanity
        console.log(`Trying to Fetch Data`)

        const response = await fetch('https://api.github.com/users?client_id=1cb51b2524b467bb3455&client_secret=12a719d7ee5465e6105bb8fc92571d821068cb65');
        const json = await response.json();
        this.setState(
            {
                dataList: json
            }
        );

    }

    render() { 
        return ( 
            <div>
                <h1>AppContainer Online</h1>
                {
                    this.state.dataList.map((data,index)=>{
                        return(
                            <div key={index} className='container'>
                                <div className='name'>
                                <p>{`Name: ${data.login}`}</p>
                                </div>
                                <div className='avatar'>
                                <img src={data.avatar_url} alt="avatar"></img>
                                <br/>
                                <br/>
                                </div>
                              
                            </div>
                        )
                    }

                    )
                }
            </div>
         );
    }
}
 
export default AppContainer;