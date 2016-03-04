// code Olegnd
//areInterseсted    
function areInterseсted(recntangleF1,recntangleF2) 
{

var left1,top1,width1,height1;
var left2,top2,width2,height2;
var a1=[],b1=[],c1=[],d1=[];
var a2=[],b2=[],c2=[],d2=[];
var distancePointPoint1,distancePointPoint2,
    distancePointPoint3,distancePointPoint4;
var width11,height11,width22,height22;   
var result;
    left1  =recntangleF1.left;
    top1   =recntangleF1.top;
    width1 =recntangleF1.width;
    height1=recntangleF1.height;
    
    left2  =recntangleF2.left;
    top2   =recntangleF2.top;
    width2 =recntangleF2.width;
    height2=recntangleF2.height;

//points of the rectangle 1 corners    
    a1=[left1,top1+height1];
    b1=[left1+width1,top1+height1];
    c1=[left1+width1,top1];
    d1=[left1,top1];

//points of the rectangle 2 corners    
    a2=[left2,top2+height2];
    b2=[left2+width2,top2+height2];
    c2=[left2+width2,top2];
    d2=[left2,top2];

//check overlay full  of the rectangle 1 on rectangle 2    
    if(	    a1[0]	===	a2[0] 
       &&	a1[1]	===	a2[1]
       &&	width1	===	width2
       &&	height1	===	height2 )
      { 
         result=true;
         return result
      }
     
// chek intersection of the rectangle 1 with rectangle 2    
  else
      {
        if (width1<=width2)
            {
            width11=width2
            }
        else{
            width11=width1
        }
        if (height1<=height2)
            {
            height11=height2    
            }
        else{
            height22=height1
            }   
        if (a1[0]-a2[0]>0) 
           {
            distancePointPoint1=a1[0]-a2[0];
           }
       else{
           distancePointPoint1=-(a1[0]-a2[0]);
           }
        if (a1[0]-b2[0]>0)
           {
            distancePointPoint2=a1[0]-b2[0];
           }
       else{
            distancePointPoint2=-(a1[0]-b2[0]); 
           }
        if (a1[1]-a2[1]>0) 
           {
            distancePointPoint3=a1[1]-a2[1];
           }
       else{
            distancePointPoint3=-(a1[1]-a2[1]);
           }
        if (a1[1]-d2[1]>0)
           {
            distancePointPoint4=a1[1]-d2[1];
           }
       else{
            distancePointPoint4=-(a1[1]-d2[1]); 
           }
           if(   (distancePointPoint1 < width11
             ||   distancePointPoint2 < width22) 
             &&  (distancePointPoint3 < height11
             ||   distancePointPoint4 < height22))
           {   
                result=true;
                return result;	
            }
       else{	
                result=false;
                return result;
            }

// chek entry of the rectangle 1 in rectangle 2
           if(                  a1[0] < a2[0]
             &&                 a1[1] < a2[1]    
             &&  distancePointPoint1  < width1
             &&  distancePointPoint2  < width1 
             &&  distancePointPoint3  < height1
             &&  distancePointPoint4  < height1)
           {   
                result=true;
                return result;	
            }
       else{	
                result=false;
                return result;
            }

// chek entry of the rectangle 2 in rectangle 1
           if(  (a1[0]>a2[0] || a1[0]<a2[0])
             && (a1[1]>a2[1] || a1[1]>a2[1])  
             &&  distancePointPoint1  > width2
             &&  distancePointPoint2  > width2 
             &&  distancePointPoint3  > height2
             &&  distancePointPoint4  > height2)
           {   
                result=true;
                return result;	
            }
       else{	
                result=false;
                return result;
           }              
           }       
};


//filterVisible
function filterVisible(recntangleF1,arrRecntangleF) 
{
    var indexArrRecntangleF;
    var arrResult=[];
    function funForFilter(recntangleFF)
                     {var result;
                      if(   recntangleFF.width  ===0
                         || recntangleFF.height ===0)   
                        {
                            recntangleFF.left=recntangleF1.left;
                            recntangleFF.top =recntangleF1.top;
                        } 
                            result=areInterseсted(recntangleF1,recntangleFF); 
                      if(result===true)
                        {
                            return true; 
                        }
                      }
        arrResult=arrRecntangleF.filter(funForFilter);
        return arrResult
};





