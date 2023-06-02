<!-- HTML -->

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
</div>

<!-- CSS -->
1. Display
.grid-container {
  display: grid;
}

2. column-gap

column-gap: 50px;

2. Row Gap
row-gap:50px;

3. Gap
gap:50px 100px;

4. .grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
  background-color: #2196F3;
  padding: 10px;
}
grid-template-columns: 80px 200px auto 40px;

  grid-template-rows: 80px 200px;





auto to automatically make adjustments
.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}

align-content: center;

  justify-content: space-evenly;

4. Grid-Lines

.item1 {
  grid-column-start: 1;
  grid-column-end: 3;
}
.item1 {
  grid-row-start: 1;
  grid-row-end: 3;
}

.item1 {
  grid-column: 1 / 5;
}

.item1 {
  grid-column: 1 / span 3;
}
Make "item1" start on column 1 and span 3 columns:

.item1 {
  grid-row: 1 / 4;
}
1 / span 3;



  The grid-area property can be used as a shorthand property for the grid-row-start, grid-column-start, grid-row-end and the grid-column-end properties.

  .item8 {
  grid-area: 1 / 2 / 5 / 6;
}

.item8 {
  grid-area: 2 / 1 / span 2 / span 3;
}


<div class="grid-container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>  
  <div class="item4">4</div>
  <div class="item5">5</div>
  <div class="item6">6</div>
</div>

.item1 {
  grid-area: myArea;
}

.grid-container {
  display: grid;
  grid-template-areas: 'myArea myArea myArea myArea myArea';
  gap: 10px;
  background-color: #2196F3;
  padding: 10px;
}
grid-template-areas: 'myArea myArea myArea myArea myArea';

.item1 { grid-area: header; }
.item2 { grid-area: menu; }
.item3 { grid-area: main; }
.item4 { grid-area: right; }
.item5 { grid-area: footer; }

.grid-container {
  grid-template-areas:
    'header header header header header header'
    'menu main main main right right'
    'menu footer footer footer footer footer';
}