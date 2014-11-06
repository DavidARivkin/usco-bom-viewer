Polymer("bom-editor", {
  bomData: null,
  selectedPart: null,
  sortInfos: null,
  created:function()
  {
    this.__colIndex = 0;
  },
  //api
  //change handlers
  bomDataChanged:function(oldData)
  {
    console.log("bom data changed",this.bomData);
    if(oldData == null)
    {
      this.sortInfos = [];
      for(var i=0;i<this.bomData.columns.length;i++)
      {
        this.sortInfos.push( 1 );
      }
    }
  },
  //event handlers
  onColumnHeaderTap:function(event)
  {
    var event = event.impl || event;
    var colId = event.srcElement.cellIndex;
    
    this.__colIndex = colId;
    this.bomData.data = this.bomData.data.sort( this._textSort.bind(this) );
  },
  //helpers:
  _isNumber:function (o) {
    return ! isNaN (o-0) && o !== null && o !== "" && o !== false;
  },
  _isString:function (o)
  {
    return (typeof o == 'string' || o instanceof String);
  },
  _textSort: function(a,b)
  {
    var index = this.__colIndex || 0;
    var dir = this.sortInfos[index] || 1; //this.__colSortDir || 1;

    //this.__colSortDir = -this.__colSortDir;
    if( this.sortInfos[index] == 0) this.sortInfos[index] =1 ;
    else{this.sortInfos[index] = -this.sortInfos[index];}

    for( var i=0; i<this.sortInfos.length;i++)
    {
        if(i == index) continue;
        this.sortInfos[i] = 0;
    }

    var firstValue = a[index];
    var secondValue = b[index];

    if(this._isString(firstValue))
    {
      if (firstValue.toUpperCase() < secondValue.toUpperCase()) return -1*dir;
      if (firstValue.toUpperCase() > secondValue.toUpperCase()) return 1*dir;
      return 0;
    }

    if(this._isNumber(firstValue))
    {
      if (firstValue < secondValue) return -1*dir;
      if (firstValue > secondValue) return 1*dir;
      return 0;
    }
  }
});
