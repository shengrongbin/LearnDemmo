# Grid布局

### 容器属性（父元素属性）

父元素添加 display:grid（inline-grid 行内元素） 属性成为grid容器

grid-template-rows：xxxPX    xxxPX  .....    设置行高(设置每一行的行高)

嫌麻烦的方法  repeat（number,xxxPX）    number代表重复的次数，后面是每行的行高。也可以是多个数，表示行高按该规律创建

grid-template-columns  设置列宽（设置方法和行高完全一样）

当行高或者列宽一样的时候，可以直接使用auto代替

fr     一行或者一列的所有fr相加，按权分配宽高



`grid-template-columns`属性和`grid-template-rows`属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用。

```
.container {
  display: grid;
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
}
```



`grid-row-gap`属性设置行与行的间隔（行间距），`grid-column-gap`属性设置列与列的间隔（列间距）。

~~~
.container {
  grid-row-gap: 20px;
  grid-column-gap: 20px;
}
等价于
grid-gap: <grid-row-gap> <grid-column-gap>;
~~~

网格布局允许指定"区域"（area），一个区域由单个或多个单元格组成。`grid-template-areas`属性用于定义区域。 

```
grid-template-areas: 'a b c'
                       'd e f'
                       'g h i';
                       
```
值相同表示同一个区域

```
grid-template-areas: 'a a a'
                     'b b b'
                     'c c c';
```

grid-auto-flow   填充顺序    默认为先左向右

row 从左往右

column 从上到下

row dense/column dense   尽量不留空    只要有满足空白的就放下去



`justify-items`属性设置**单元格内容**（每个格子中的内容比如<p>等等）的水平位置（左中右），`align-items`属性设置单元格内容的垂直位置（上中下）。 

```
.container {
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
}
等价于

place-items: <align-items> <justify-items>;
```

- start：对齐单元格的起始边缘。
- end：对齐单元格的结束边缘。
- center：单元格内部居中。
- stretch：拉伸，占满单元格的整个宽度（默认值）。



`justify-content`属性是整个**内容区域**（表格的位置）在容器里面的水平位置（左中右），`align-content`属性是整个内容区域的垂直位置（上中下）。

> ```
> .container {
>   justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
>   align-content: start | end | center | stretch | space-around | space-between | space-evenly;  
> }
> ```



### 项目属性

grid-column-start属性：左边框所在的垂直网格线

grid-column-end属性：右边框所在的垂直网格线

grid-row-start属性：上边框所在的水平网格线

grid-row-end属性：下边框所在的水平网格线



直接合并后使用

grid-column:   x    /  x  ;

grid-row:   x   /  x;

其中可以使用span表示跨越了多少个格子





grid-area：x      直接使用父元素中定义的区域

`justify-self`属性设置单元格内容的水平位置（左中右），跟`justify-items`属性的用法完全一致，但只作用于单个项目。

`align-self`属性设置单元格内容的垂直位置（上中下），跟`align-items`属性的用法完全一致，也是只作用于单个项目。

> ```
> .item {
>   justify-self: start | end | center | stretch;
>   align-self: start | end | center | stretch;
> }
> ```