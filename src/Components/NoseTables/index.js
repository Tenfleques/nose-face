import React, {Component} from "react";

String.prototype.hashCode = function() {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
      chr   = this.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
};

class noseMeasureTable extends Component {
    constructor (props){
        super(props);

        this.state = {
            columns : [],
            data : [],
            page : 1, 
            rows : props.rows
        }
        this.onClickPagination = this.onClickPagination.bind(this);
    }
    fleques_large_table_columns(){
        if(!this.props.data.measure) 
            return;
        var columns = <div className={this.props.headerClass  + ' pb-4 z-200 sticky-columns text-center'}>
                        <div className='row px-3'>
                            <div className="col-12 h6">
                                {this.props.data.measure.start 
                                + " " + this.props.data.measure.name 
                                + " "+ this.props.data.measure.description}
                            </div>
                            <div key={"col_id"} className='col-1'>
                                ID
                            </div>
                            {
                                this.state.columns.map((c) => {
                                    return <div key={"col_" + c.field} className='col '>
                                        {c.title}
                                    </div>
                                })
                            }
                        </div>
                    </div>
        return columns;
    }
    fleques_large_table_rows(){
        var rows = [];
        let cls = "";
        let init = this.state.page * this.state.rows + 1;
        let end = Math.min(init + this.state.rows, this.state.data.length);

        for(var i = init; i < end;  ++i){           
            rows.push(
                <div key={"row_" +  i} className={cls + ' row border-bottom py-2 px-3'}>
                    {<div key={"cell_counter_" + i} className='col-1'>    
                            {i}
                        </div>}
                {this.state.columns.map((j) => {
                    return  <div key={"cell_" + j.field} className='col'>    
                            {this.state.data[i][j.field]}
                        </div>
                    })
                }                 
            </div>
            );
        }
        rows.push(<div key={"row_pagination"} className={cls + ' row py-2 px-3 '}> {this.flequesGetPagination()}</div>)
        return rows;
    }
    onClickPagination(page){
        this.setState({page : page});
    }
    flequesGetPagination(){
        let pages = Math.floor(this.state.data.length/ this.state.rows) + (this.state.data.length % this.state.rows ? 1 : 0);

        let btns = [];
        for(let i = 0; i < pages; ++i){
            btns.push(
                <span key={"page_" + i} className={"btn btn-transparent mx-0 text-muted text-small" + (this.state.page === i ? " bg-primary text-white" : "")} onClick={() => this.onClickPagination(i)}>
                    {i + 1}
                </span>
            )
        }
        return btns;
    }
    flequesLargeTable(){
        var columns = this.fleques_large_table_columns( "bg-primary");
        var rows = this.fleques_large_table_rows();
        
        return <div className={this.props.className}>
                    {columns}
                    {rows}
                </div>
    }
    componentDidUpdate(oldProps){
        if(this.props.data.measure !== oldProps.data.measure){

            let table_data = [], columns = [];
            let src = this.props.data.measure.sensors;
    
            for(let i = 0; i < src.length; ++i){ //traverse across columns
                let col_id = "field_" + src[i].sid.hashCode();
                columns.push({
                    "field" : col_id,
                    "title" : src[i].sid
                });
                for (let j = 0; j < src[i].readings.length; ++j){
                    if(!table_data[j]){
                        table_data[j] = {};
                    }
                    table_data[j][col_id] = src[i].readings[j]
                }
            }
            this.setState({
                columns : columns,
                data : table_data
            })
        }
    }
    
    render(){
        return this.flequesLargeTable()
    }
}

export default noseMeasureTable