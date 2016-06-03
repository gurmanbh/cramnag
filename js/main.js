(function(){

// User-friendly  human-resource  concept Integrated Cross-platform  neutral  toolset Enterprise-wide  multi-tasking  conglomeration Polarised  maximized  focus group Decentralized  motivating  success Quality-focused  directional  knowledge base Visionary

function getcol (){return '#' + (function co(lor){   return (lor +=
  [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
  && (lor.length == 6) ?  lor : co(lor); })('');}

    var data = [

        {
            "name":'cros',
            'sentence':"Cause we are all 'cross-platform.'"
        },
        {
            "name":'CMSx',
            'sentence':"Extreme content management for the future."
        },
        {
            "name":'cronk',
            'sentence':'As in, "cronk out some content."'
        },
        {
            "name":'minc',
            'sentence':'It stands for \'maximizing integrated content!\' It\'s very meta.'
        },
        {
            'name':'punc',
            'sentence':'Yeah, like punk. platforms, users... and new content!'
        },
        {
            'name':'junc',
            'sentence':'The j has no meaning. But there is content in there somewhere!'
        },
        {
            'name':'sunc',
            'sentence':'It resonates with the future!'
        },
        {
            'name':'func',
            'sentence':'It stands for  \'func\'tional.'
        },
        {
            'name':'bonk',
            'sentence':'bonk! bonk! bonk! Go bonkers!'
        },
        {
            'name':'sponc',
            'sentence':'special platforms and organically nurtured content.'
        },
        {
            'name':'jibe',
            'sentence': 'Rhymes with scribe. Isn\'t that what we do?'
        },
        {
            'name':'phiz',
            'sentence':'Platforms honed with innovation and zeal!'
        },
        {
            'name':'fozy',
            'sentence':'Rhymes with dozy. Don\'t you love it?'
        },
        {
            'name':'fuze',
            'sentence':'Sounds all electronic and futuristic. Right?'
        },
        {
            'name':'bize',
            'sentence':"It's like biz. But with an e. It's cool."
        },
        {
            'name':'quak',
            'sentence':"quak! quak! quak!"
        },
        {
            'name':'adz',
            'sentence':'Isn\'t that what is going to save us?'
        },
        {
            'name':'pock',
            'sentence':'The disease is spreading folks.'
        },
        {
            'name':'sucs',
            'sentence':'Think of it as "stream-lined user-generated content system." All lowercase, That\'s important.'
        },
        {
            'name':'vicog',
            'sentence':'viral content generator! With a name like that, it surely sounds like a monetization company.'
        },
        {
            'name':'cor',
            'sentence':'Where content is \'cor\'e! It\'s a monetization company!'
        },
        {
            'name':'ajee',
            'sentence':'It means crooked. Like this whole situation.'
        },
        {
            'name':'gronc',
            'sentence':'It\'s short for "greatly resonating, old and new content."'
        },
        {
            'name':'aic',
            'sentence':'AI content! Artificial intelligence is the answer to everything folks.'
        },
        {
            'name':'plac',
            'sentence': 'It stands for "platform agnostic content." It\'s the future!'
        }
        ]

        var sitelink = 'http://gurmanbh.github.io/cramnag'

       

        var item = data[Math.floor(Math.random()*data.length)];

            var item = data[Math.floor(Math.random()*data.length)];
            $('.name').html(item.name)
             var tweet = 'https://twitter.com/intent/tweet?url='+sitelink+'&text='+'Media name idea: '+item.name+'. '+item.sentence
              var col = getcol()
            $('.name').css({'color':col})
            $(".social-share-icon").mouseenter(function() {
                $(this).css("color", col);
            }).mouseleave(function() {
                 $(this).css("color", "black");
            })
            $('.comment').html(item.sentence)
            $('a.twitterlink').attr('href',tweet)

        $('.generate').on('click',function(){
            var item = data[Math.floor(Math.random()*data.length)];
            $('.name').html(item.name)
              var color = getcol()
            $('.name').css({'color':color})
            $(".social-share-icon").mouseenter(function() {
                $(this).css("color", color);
            }).mouseleave(function() {
                 $(this).css("color", "black");
            })
            $('.comment').html(item.sentence)
            var tweet = 'https://twitter.com/intent/tweet?url='+sitelink+'&text='+'Media name idea: '+item.name+'. '+item.sentence
$('a.twitterlink').attr('href',tweet)
        })

	
}).call(this)
