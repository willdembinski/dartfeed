var http = require('http');
var querystring = require("querystring");
//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'


var qString = {
  searchTerm:"tech", // Search query term. Search is performed on the article body, headline and byline.
  filteredBy:"",// Filtered search query using standard Lucene syntax. The filter query can be specified with or without a limiting field: label. See Filtering Your Search for more information about filtering. 
  begin_date:"",
  end_date:"",
  sort:"", // 'newest' | 'oldest'
  fieldLimit:"", //Will only return these fields if specified (Default all): web_url | 'snippet' | 'lead_paragraph' | 'abstract' | 'print_page' | 'blog' | 'source' | 'multimedia' | 'headline' | 'keywords' | 'pub_date' | 'document_type' | 'news_desk' | 'byline' | 'type_of_material' | '_id' | 'word_count'
  hl:false,//will 'highlight' the search term
  page:"",//Integer, 0–last set of ten default: 0 - The value of page corresponds to a set of 10 results (it does not indicate the starting number of the result set). For example, page=0 corresponds to records 0-9. To return records 10-19, set page to 1, not 10.
  facet_field:"", //section_name document_type type_of_material source day_of_week
  facet_filter:false,//When set to true, facet counts will respect any applied filters (fq, date range, etc.) in addition to the main query term
  apiKey:""




}


var options = {
  host: 'http://api.nytimes.com/svc/search/v2/articlesearch.json?',
  path: 'q=' + qString.searchTerm + '&fq=news_desk%3A%28%22Technology%22%28&additional%2Dparams=&api-key=' + qString.apiKey
  // path: querystring.stringify('/svc/search/v2/articlesearch.json?q=' + qString.searchTerm + '&fq=section_name:("Technology")&additional-params=values]&api-key=' + qString.apiKey)
};

  // console.log(options.path)
  console.log("QUERY URL: ",options.host+options.path)



callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
}

// http.request(options, callback).end();
var test = "http://api.nytimes.com/svc/search/v2/articlesearch.json?format=json&query=smoking&api-key="
http.get(test+qString.apiKey,function(err,resp){
  if(err){
    console.log("Error",err.statusCode)
  }else{
    console.log(resp)
  }
})