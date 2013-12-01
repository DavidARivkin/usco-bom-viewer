Polymer("bom-viewer", {
  bomData: null,
  selectedPart: null,
  created:function()
  {
  },
  //api
  //change handlers
  bomDataChanged:function(oldData)
  {
    console.log("bom data changed",this.bomData);
  },
  tutuChanged:function(oldData)
  {
    console.log("tutu data changed",this.tutu);
  }
});
