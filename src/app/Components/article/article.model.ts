export class Article{
    public title:string;
    public link:string;
    public votes:number;
    constructor(title: string,link: string,votes:number){
        this.title=title;
        this.link=link;
        this.votes=votes || 0;

    }
    voteup(){
        this.votes++;
        return false;
      }
      votedown(){
        this.votes--;
        return false;
      }
      domain():string{
        try{
          const domainAndPath:string=this.link.split('//')[1];
          return domainAndPath.split('/')[0];
        }catch(err){
          return "";
        }
      }
}