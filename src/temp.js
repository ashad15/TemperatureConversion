

var React= require('react');



class temp extends React.Component
{
    
    state= {celc: 'Temperature in Celsius', farh:'Temperature in Fahrenheit'}

    fn2=(event)=>{
        
        event.preventDefault();
        this.setState({celc:null, farh:null})
    }
    

    fn1=(event)=>{
        event.preventDefault();
        if(this.state.celc==null)
        {
            
            var b= (((this.state.farh)-32)*5)/9;
            
            this.setState({celc: b}) }
            if(this.state.farh==null)
            {
                var a= ((this.state.celc)*9)/5 +32;
                console.log(a);
                this.setState({farh: a}) }     
               }
    

    render()

    {
       
        return (
            
        <div style={{textAlign: "center",width:"400px",height:"400px",position:"relative", top:"60px",marginLeft:"auto",marginRight:"auto",marginTop:"auto",marginBottom:"auto",boxShadow:"0 0 0 1600px 	rgb(240,240,240"}}>
                <div style={{top:"30px",position:"relative",}}>
                     <img  style={{height:"25px",filter:"hue-rotate(135deg) contrast(150%)", top:"35px", left:"-30px", position:"relative"}} alt=''src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzu5D1-VLeqMhUnJCMTq_ADYBuNNabIZnoUgqHydWE1MZjiPc&s"></img><br></br>
                     <img  style={{height:"100px", WebkitTransform:"rotate(45deg)"}} alt=''src="http://getdrawings.com/free-icon/celsius-icon-61.png"></img>                
                     <img  style={{height:"25px",right:"40px" ,top:"-10px", position:"relative"}} alt="" src="https://www.shareicon.net/data/512x512/2015/09/08/97594_degree_512x512.png"></img>
                 </div>
            <h2>Convert Temperature</h2>
            <h4 style={{position:"relative", top:"-20px" ,opacity:".6"}}>Superfast!</h4>
            <form onSubmit={this.fn1} >
                 <div style={{width:"275px", height:"21px", outline:"1px solid grey", marginLeft:"auto",marginRight:"auto"}}>
                    <img  style={{height:"18px",width:"20px", filter:"hue-rotate(135deg)", top:"1px", position:"relative"}} alt=''src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzu5D1-VLeqMhUnJCMTq_ADYBuNNabIZnoUgqHydWE1MZjiPc&s"></img>
                    <input style={{width:"250px", top:"-4px",position:"relative", border:"none",opacity:`${this.state.celc==="Temperature in Celsius"? .7: 1}`}}  type="text " pattern="[0-9]*.[0-9]*" id="celc" align="middle" onClick={this.fn2} value={this.state.celc==null ? `` : `${this.state.celc}`}onChange={e=>{this.setState({celc: e.target.value,farh: null })}} />
                </div>
                <br/>
            
                <div style={{position:"relative", top:"-17px"}}>
                     <img style={{ height:"20px",width:"20px", opacity:".5"}}alt=''src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUmMrGwTjajpt1joczqLOGK_FFusfA0beV0m0HB4KFcDk8PUqL">
                    </img>
                    <br/>
                </div>
                <div style={{position:"relative",top:"-22px",width:"275px",height:"21px", outline:"1px solid grey",marginLeft:"auto", marginRight:"auto" }}>
                    <img  style={{height:"18px", width:"20px", filter:"contrast(150%)"}} alt=''src="https://www.shareicon.net/data/512x512/2015/09/08/97594_degree_512x512.png"></img>
                    <input style={{width:"250px", top:"-4px", position:"relative", border:"none",opacity:`${this.state.farh==="Temperature in Fahrenheit"? .7: 1}`}}  type="text" pattern="[0-9]*.[0-9]*" id="farh" align="middle" onClick={this.fn2} value={this.state.farh==null ? `` : `${this.state.farh}`}onChange={e=>{this.setState({farh: e.target.value,celc: null})}} />
                </div>
                <br/>
                <button type="submit" style={{opacity:"0"}} />
            </form>
        </div>
    )}

}
module.exports=temp;
