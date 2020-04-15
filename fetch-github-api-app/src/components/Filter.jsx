import React,{Component} from 'react';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // filterList: [],
            dataList:[],
        }
    }

    handleInput = (event) =>{
        if(event.target.name==='filter'){
            this.setState(
                {
                    dataList: event.target.value
                }
            )
        }
    }

    handleSubmission = (event) =>{
        event.preventDefault();
       
        this.props.updatedataList(this.state.dataList)

        
    }

    render() {
        return (
            <div>
                <p>Filtered Result: {this.result}</p>
                <input type="text" id='filter' name='filter' value={this.state.filterList} onChange={this.handleInput}/>
                <button onClick={this.handleSubmission}>Filter</button>
                {
                    this.props.dataList.filter((post,index) =>{
                        return(
                            <div key={index}>
                                <p>{post.login}</p>
                            </div>
                        )
                    }

                    )
                } 
            </div>
        );
    }
}

export default Filter;