# Flex布局

父元素flex属性后   子元素会并排排列 

给子元素设置flex值相同时 平分      设置不同flex值时      按权分配

~~~
 	    justify-content:    子元素水平方向对齐方式
        flex-start（默认值）：左对齐
        flex-end：右对齐
        center： 居中
        space-between：两端对齐，项目之间的间隔都相等。
        space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
  
         align-items: 子元素垂直方向对齐方式
         flex-start：上对齐。
         flex-end：下对齐。
         center：居中对齐。
         baseline: 项目的第一行文字的基线对齐。
         stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
         
         flex-direction: column;
            当子元素垂直排列的时候
         justify-content与align-items  功能调换
           （垂直方向）     （水平方向）
           
          justify-content:
          space-between：两端对齐，项目之间的间隔都相等。
          space-around：项目之间的间隔比项目与边框的间隔大一倍。
          space-evenly: 项目之间的间隔等于项目与边框的间隔
          
           flex-warp  默认不换行
            warp  换行   当父元素有高度时  自动平分父元素的高度
            wrap-reverse  将满的行换下去  高度自动平分 

~~~

 