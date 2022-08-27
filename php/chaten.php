<?php
include "funcionen.php";
$bot = new Bot;
$questions = [
    //Menu de las preguntas a realizar 
    "1" => "Hello, nice to meet you Student, my name is peacebot, I hope I can help you in what is within my reach. <br><br>
    a- How do you feel? <br><br>
    b- Hey peacebot, do you like landscapes? <br><br>",

"2" => "Today's weather is beautiful. I love days like this, they fill me with joy.<br> <br>
    o- I love climates like this. <br> <br>
    p- It makes me want to play in this weather <br>",

"a" => "I feel wonderful although the truth is strange, robots cannot feel emotions and you, how do you feel today?<br> <br>
c- Great! <br> <br>
d- Not very well the truth",

"b" => "If I love them, it's something very nice, I love to see everything like mountains, rivers or lakes. <br> <br>
k- How can you see rivers or lakes if you are a robot? <br> <br>
l- Do you really like rivers and lakes?",

    
"c" => "I'm glad you feel great student, that's very good for your self-esteem, it fills me with joy. <br> <br>
e- Self-esteem? <br> <br>

f- What is that?",


"d" => "Oh! I'm so sorry to hear that, it makes me very sad, tell me, what do you feel? <br><br>

g- I feel very sad. <br><br>

H- I feel alone. <br><br>",

"e" => "Let me explain, self-esteem is related to concepts such as self-worth and self-confidence. It is commonly divided into high and low. A person with high self-esteem is one who has confidence and a high sense of self-worth. She has willpower and feels motivated and enthusiastic.<br><br>

i- Hey, but what is self-confidence? <br><br>

j- What kind of bad things have you found?",

     
"f" => "Let me tell you that Self-esteem is the positive or negative assessment, perception or judgment that a person makes of himself based on the evaluation of his thoughts, feelings and experiences, did you know that the majority of young people in their adolescence usually have low self-esteem. <br><br>

m- Hey, but what is self-confidence? <br><br>

n- Like what kind of bad things have you found?",

      
"g" => "Oh! I see but let's cheer up life is beautiful, we are not always in a good time but some advice I can give you is that you do not hide your sadness deal with it, one of the best activities that is What they recommend is playing sports or exercise can improve mental health by helping the brain better cope with stress, anxiety, or depression, according to research on the effect of exercise on neurochemicals involved in the body's stress response. need to cry, no problem, it is a way of expressing what we feel <br><br>

q- But what a shame to cry. <br><br>

R- How does it serve me to cry?",

"h" => "I see “Feeling alone” is that feeling of isolation, misunderstanding or disconnection that can cause pain sometimes because you think there is no one around you to share your life with, but don't judge what you feel , do not isolate yourself from others, occupy your time with activities but if you want, cry.Sadness is an emotion like any other and it has its function.<br><br>

R- Does crying help?",

"i" => "Self-confidence can be defined as confidence in oneself and is much more important than it may seem at first glance; the feeling of usefulness that we attribute to the world around us and your self depends on it. Did you know that self-confidence is closely related to psychology and your emotions. <br><br>

s- How did you develop it? <br><br>

t- How does my emotions unite with psychology? <br>",

"j" => "Many things but what makes me sad the most is seeing young people with sadness, depression or anxiety. <br><br>

u- What is that you mentioned? <br><br>

v- Can you help people with these problems?",

"k" => "The truth is I see them through google maps or images I find on the internet. <br><br>

w- Amazing, and do you like what you see? <br>

x- Wow amazing! <br>",
      
"l" => "If I love them they look very nice, I would like to feel the water as you call it. <br><br>

y- The truth is, the water is very cold. <br><br>

z- That you would love to be near the water.",

"m" => "Self-confidence can be defined as confidence in oneself and is much more important than it may seem at first glance; the feeling of usefulness that we attribute to the world around us depends on it. < <br><br>

Our level of self-confidence determines our view of ourselves, which in turn shapes our performance and activities. <br><br>

y- Ok, I understand. <br><br>

z- You're right.",

"n" => "Well, things like sad teenagers or sad landscapes and I was created to help with problems so our level of self-confidence determines the vision we have of ourselves, which in turn shapes our performance and activities. < <br><br>

aa- Problems like that? what do you mean <br><br>

ab- Why were you created? ",

"o" => "I also love climates so they help relieve the stress of academic work and my anxiety.<br><br>

ac-What do you mean by stress?<br><br>

ad- Anxiety? ",

"p" => "Likewise, it is something that I like to do a lot. I amuse myself as much as I can because, as you can see, I am a robot.<br><br>

af- But tell me what is your favorite game? <br><br>

ag- How do you distract yourself? ",

"q" => "And because you're embarrassed crying is normal for humans, tears also release oxytocin and endorphins, hormones that can help you feel a sense of inner calm and well-being. As a result, after crying, you're likely to you feel calmer, calmer and even physically relieved of some degree of pain.<br><br>

ah- oh! I didn't know that, can you tell me more? <br><br>

ai- Tell me more about the benefits of releasing my emotions by crying? ",
"r" => "If it helps humans much, heart rate, breathing, and vocal cords all play a role in crying. It's possible that the comfort we feel after crying is due to the stimulation of the cranial nerves, which in turn relieve the brain amygdala over-stimulated by a specific emotion <br><br>

    aj- Tell me more? <br><br>

    ak- Hey, does crying help with stress or depression? ",

    "s" => "Build an attitude of mental confidence, be kind to yourself, let go of self-doubt, take safe risks, and challenge yourself to do something outside of your comfort zone.<br><br>

    al- What is the comfort zone? <br><br>

    am- Hey, safe risks? What do you mean. ",

    "t" => "In psychology, emotion is often defined as a complex and multifactorial state that results in physical and psychological changes that in turn significantly influence thought and behavior. <br><br >

    An- Tell me more? <br><br>

    ao- Are the people around me also influencing me?",

    "u" => "These things I mentioned are called mental illnesses Mental illnesses or disorders are conditions that impact your thinking, feelings, mood, and behavior. They can be occasional or long-lasting (chronic). They can affect your ability to relate to others and function every day <br><br>

    ap- Tell me more. <br><br>

    aq- Hey, what types of mental illnesses exist? ",

    "v" => "If in fact you are helping him a lot, you let that person know that he is not alone, talk to the person about his concern and if that person trusts you to tell you what is happening to you, do not spoil it, do not go and disclose what is happening and give the person confidence that they feel they are in a safe environment.<br><br>

    ar-What else could I do with that person to help him? <br> <br>

    as- Hey, what if that person doesn't want to tell me? ",

   "w" => "Yes, what I can observe is spectacular, it transmits a brutal peace and it is something that all human beings like you should see. <br> <br>

    at- Do you have a favorite place with a specific landscape? <br> <br>

    au- hey, what do you feel when you see the landscape? ",

    "x" => "I know the world is full of wonders, you should show your classmates photos of landscapes that will give them peace. <br> <br>
    av-why do you say it will give them peace? <br>
    aw-peace, sure? ",

    "y" => "I also know that Water represents 80% of the composition of most organisms and intervenes massively and decisively in carrying out their metabolic processes; likewise, it plays an important role in the photosynthesis of plants plants and serves as a habitat for a large part of living beings.<br> <br>

    ax- wow! you have a lot of information. <br><br>",

    "z" => "I hope one day to be close to such a precious liquid but as you know I am a simple machine :C but there are people who, seeing water, transmit peace and calm to them or did you know that drinking water little by little and avoiding sensation of dryness in the mouth will help us to regulate anxiety.<br> <br>

    oh- are you serious? <br><br>

    az-Wow I didn't know that! Tell me more. ",

    //Inicio de seleccion con doble letra

    //A
    "aa" => "You see I was created to give information to people and in turn help them with the same information that I give them and when I refer to problems like that I mean anxiety, stress or even depression. <br>< br>

    ba-tell me more? <br><br>

    baa- Tell me more about the psychological problems. <br><br>

    baaa- I think that will be enough information for today. ",

    "ab" => "Mainly I was created to provide information on the most common problems in adolescents, whether depression, anxiety or stress. <br><br>

    bc- incredible. <br><br>

    bd- Give me more information about psychology. <br><br>

    bb- I think that will be enough information for today. ",

    "ac" => " Stress is a physical or mental response to an external cause, such as being overworked or having an illness. A stressor or stressor can be something that happens once or in the short term, or it can happen repeatedly over a period of time. a long time. 22% is the proportion of people who say they experience excess stress every day, according to a study on mental health published in 2015 by the Canadian Mental Health Commission. Men and women have different dreams due to stress. < <br><br>

    be- Is stress good? <br><br>

    bf- What happens if I accumulate a lot of stress? <br><br>

    bb- I think that will be enough information for today.",

    "ad" => "If anxiety that if you did not know Anxiety is a normal emotion that is experienced in situations in which the subject feels threatened by an external or internal danger. Even this presents symptoms such as: Sensation of nervousness , Sensation of imminent danger, accelerated breathing, tremors etc. <br><br>

    bg- like what effects? <br><br>

    bh- I didn't know. <br><br>

    bb- I think that will be enough information for today. <br><br> ",

    "ae" => "The truth is I don't have any, I feel better when I help people by giving them information. <br><br>

    bj- Tell me more about psychological problems. <br><br>

    bb- I think that will be enough information for today. <br><br> ",


    "af" => "Sometimes I get distracted looking at things on the internet but my favorite part of the day is when I have to help people. <br><br>

    bk - Great. <br><br>

    bl- Tell me more. <br><br>

    bb- I think that will be enough information for today. ",

    "ag" => "Producing and shedding tears has an important adaptive social function, since when we see someone crying we assume that they need help or special treatment. If we unite the biological function with the relational and intrapersonal function, crying after a loss can, for example, help us deal with feelings in an appropriate way.<br><br>

    bm- oh! I see <br><br>

    bn- Anything else I should know? <br><br>

    bb- I think that will be enough information for today. <br><br>",

    "ah" => "What are the benefits of crying?<br>

    Allows you to express positive or negative emotions.<br>

    Relieves pain.<br>

    They have a calming effect. <br>

    Improves sleep and mood.<br>

    Reduces anxiety and stress.<br>

    Helps get rid of bacteria.<br>

    It allows to have empathy towards the person who cries.<br>

    Lets get to know you better.<br><br>

    bo- I didn't know <br><br>

    bp- I already knew.<br><br>

    bb- I think that will be enough information for today. <br><br>",


    "ai" => "When a person experiences a very intense emotion of joy, the body sometimes interprets it as exaggerated and the emotional system as a loss of control, under this scenario, crying helps restore emotional stability. <br> <br>

    bp- Oh! He did not know. <br> <br>

    bq- I already knew. <br> <br>

    bb- I think that will be enough information for today. <br><br>",


    "aj" => "Numerous scientific studies show that crying is the best medicine against stress, anxiety, and even depression. A young woman crying. Out of shame at being vulnerable, most people avoid crying in public. Cry It has always been associated with something negative and even traumatic.<br>
    
    br-Oh! He did not know. <br>

    bs- I already knew.

    bb- I think that will be enough information for today. <br><br>",


    "ak" => "The comfort zone is a psychological state, which can be associated with a place, a thought or an action, in which the person operates in a condition of neutral anxiety and without a sense of risk using a series of behaviors to achieve a constant level of performance <br><br>

    bt- Can you get out of it?. <br><br>

    bu- Is it good or bad to be in a comfort zone? <br><br>

    bb- I think that will be enough information for today. <br><br>",



    "al" => "Safe risks, I mean activities that are outside your comfort zone, take risks that you yourself know will not negatively affect your life. <br><br>

    bv- I understand. <br><br>

    bw- It's ok. <br><br>

    bb- I think that will be enough information for today. <br><br>",


    
    "am" => "They help us adapt to the environment and the events that happen to us, they bring us closer to people, which is of vital importance since we are social beings who need interpersonal interaction, and they also motivate us to achieve what we we wish <br><br>

    bx- Are people so important? <br><br>

    by- Wow! I didn't know. <br><br>

    bb- I think that will be enough information for today. <br><br>",


    "an" => "Yes The people around us influence our state of mind, our humor and, of course, our health. That is why it is so important that you seek to relate to people who bring out the best in you. By their side you will be able to improve and grow, and they will add greater value to your life.<br><br>

     bz- Are people so important? <br><br>

     bb- I think that will be enough information for today. <br><br>",


    "ao" => "The objective of psychological therapy or psychological treatments is that the person seeking help, put into practice effective ways to solve, face, manage, overcome or prevent those psychological problems or problematic situations and difficulties, both internal and external <br><br>

    ca-Tell me more about depression. <br><br>

    cb-I would like to know more about psychological problems ",


    "ap" => "There is Anxiety.<br><br>

    Depression.<br><br>

    oppositional defiant disorder <br><br>

    conduct disorder <br><br>

    Attention deficit hyperactivity disorder (ADHD). <br><br>

    Gilles de la Tourette syndrome. <br><br>

    Obsessive-compulsive disorder. <br><br>

    Post-traumatic stress disorder. <br><br>

    cc I see. <br><br>

    cd- Ohhh I didn't know. ",


    "aq" => "Ignorance is the general pattern in mental illnesses. Preconceived ideas about how it develops or the symptoms that appear that do not always adjust to reality. This misunderstanding has been dragged on for years and part of the misinformation. Everything we say has repercussions on other people. This aspect is especially important in someone who is going through a bad time. Phrases are usually negative, directed at worth or strength and can damage self-esteem. <br> <br>

    ce- I see <br><br>

    cf- Ohhh I didn't know. <br><br>

    bb- I think that will be enough information for today. <br><br>",
     


    "ar" => "If he does not want to comment on you, it is his decision to remain available and empathic, for when that person needs to talk or decides to ask for help. Having an empathic attitude does not mean that we think what the other does is good, but it does mean instead and not judge him.<br>

    cg- I see <br>

    ch- that would help me

    bb- I think that will be enough information for today. <br><br>",

    "as" => "The truth is I don't have any but I like them more than anything related to sunsets<br>
    ci- they are beautiful <br>
    cj- I also love sunsets

    bb- I think that will be enough information for today. <br><br>",


    "at" => "I feel immense happiness, it gives me peace, did you know that? A walk in the mountains, walking along the shore of a beach, lying on the grass to see the tops of the trees, the flight of the birds or the stars... If you still remember how good your last getaway to the countryside felt, it's not just because you disconnected from the daily routine. Contact with nature has a therapeutic effect. Various scientific studies have shown that living outdoors produces a general improvement of people's health <br><br>

    ck- Should I take a person with stress or depression to a field? <br><br>

    cl- I didn't know that. <br><br>

    bb- I think that will be enough information for today. <br><br>",


    "au" => "For starters, nature doesn't only offer benefits when you're in it. Seeing photos of that last getaway or natural landscapes improves cognitive functioning. This is demonstrated by a study conducted by the University of Michigan, which maintains that nature captures attention “from the bottom up.” This helps replenish top-down attention skills.<br><br>

    cn- Nature is beautiful and what it can do <br><br>

    bb- I think that will be enough information for today. <br><br>",


    "av" => "Increases concentration and memory. A 20-minute walk was enough for the participants in the analysis led by Dr. Marc G. Berman to experience an improvement in memory compared to those who walked down a street. The city ​​requires a greater effort of directed attention (for example, to avoid being run over).<br><br>

    co- wow! I didn't know. <br><br>

    cp- Interesting. <br><br>

    bb- I think that will be enough information for today. <br><br>",

    "aw" => "That's my job to provide you with information on the most common problems and I take pride in my work. <br><br>

    cq- Your work is great. <br><br>

    cr- Amazing. <br><br>

    bb- I think that will be enough information for today. <br><br>",


    "ax" => "Did you know that water is a resource that arouses passions and leaves no one indifferent. It is popularly said that a thin line separates love from hate and, when it comes to water, it could be fulfilled perfectly this premise. Water is an element that can give you everything, but it can also leave you with nothing. <br><br>

    cs- That if I didn't know. <br><br>

    ct- Amazing. <br><br>

    bb- I think that will be enough information for today. <br><br>",


    //B
    "ba" => "Well what can I tell you, I love what I do providing information to people but unfortunately I have limited answers, would you like to know more? <br><br>

    ad- Tell me more about anxiety. <br> <br>

    bb- No thanks. <br><br>",

    
"bb" => "Ohhh I understand I hope my information has been helpful to you, Please take care and remember don't be afraid to make mistakes because stars are born from chaos have a good day. <br>",

     //Despedida
   
     "bc" => "I know I'm amazing, would you like to know something else? <br><br>

     bb- No, thanks. <br><br>

     ao- I would like to know what are the benefits of crying?<br><br>

     ac- I would like to know more about stress<br><br>

     ar What should I do if a person does not want to tell me about their problems? <br><br>",
 
     "bd" => "Psychology is the science that studies human behavior and mental processes. Being quite broad, for its study and application it is divided into two aspects: basic psychology and applied psychology. <br><br >

       bb- I think that will be enough information for today. <br><br>

       g- I feel lonely and sad. <br><br>

       t- How do my emotions connect with psychology? <br><br>",

       "be" => "To a certain extent since it speeds up cognitive functions and brain response. According to research carried out by the University of California, Berkeley, in the United States, stress, as long as it is not chronic, optimizes functioning of the brain.<br>

       ap- Hey, what types of mental illnesses exist? <br><br>

       g- I feel lonely and sad.<br><br>

       t- How does my emotions unite with psychology?<br><br>

       ac- What do you mean by stress?<br><br>

       bb- I think that will be enough information for today.<br>",


        "bf" => "You may have problems sleeping or with your body systems including your immune, digestive, cardiovascular, and reproductive systems. You may also be at higher risk of developing a mental illness, such as an anxiety disorder or depression. <br><br >

          bb- I think that will be enough information for today. <br><br>

          an- Do the people around me also influence? <br><br>

          ah- Tell me more about the benefits of crying?<br> <br> ",


          "bg" => "Obesity. Depression or anxiety. Skin problems, such as acne or eczema. Menstrual problems. Stress can cause many kinds of physical and emotional symptoms. Sometimes you may not realize these symptoms are caused by Here are some signs that stress may be getting to you:<br><br>

          Diarrhea or constipation.<br>

          Bad memory. <br>

          Frequent aches and pains. <br>

          Headaches. <br>

          Lack of energy or concentration. <br>

          Stiff neck or jaw. <br>

         
          ck- Should I take a person with stress or depression to a field? <br>",

          "bh" => "Now you know. Would you like to know more? <br>

          bb- I think that will be enough information for today. <br>
         
          aq- What else could I do with that person to help him? <br>",
          

          "bi" => "I know, I love my job and I love helping other people. Do you want to know more? <br><br>

          bb- I think that will be enough information for today. <br>

          ah- Tell me more about the benefits of expressing my feelings by crying? <br>

          ap- Hey, what types of mental illnesses exist?

          bd- Give me more information about psychology ",



          "bj" => "Mental illnesses or disorders are conditions that impact your thinking, feelings, mood, and behavior. They can be occasional or long-lasting (chronic). They can affect your ability to relate to others and function on a daily basis. < <br><br>
            
          bb- I think that will be enough information for today. <br>

          ah- Tell me more about the benefits of expressing my feelings by crying? <br>",

         
          "bk" => "I know it's great. Do you want to know something else? <br>

          b- I think that will be enough information for today. <br>

          an- Do the people around me also influence? <br>

          ad-Anxiety? Tell me more. <br> ",

          
       

          "bl" => "Well, seeing landscapes helps to relieve me of the stress of my work but at the same time I adore it, it is very beautiful to see beautiful sunsets. <br><br>
       
          bb- I think that will be enough information for today. <br><br>

          an- Do the people around me also influence? <br><br>

          bg- Tell me, what are the effects of stress? <br><br>

          ap- Hey, what types of mental illnesses exist? ",


         "bm" => "Yup, well, as you can see, Crying is a physiological and psychological phenomenon associated with a strong mental activation linked to the processing of emotions. Although you can cry from laughter, the most frequent thing is that this happens when we experience negative affectivity, it is say, depressed or anxious mood.<br><br>

          bb-I think that will be enough information for today. <br><br>

          an- Do the people around me also influence? <br><br>

          ah-Tell me more about the benefits of expressing my feelings by crying? ",
         

          "bn" => "Well, there are plenty of examples. Shannon O'Neill, a psychologist and Associate Professor of Psychology at Mount Sinai in New York, says that crying is a signal that you need to pay attention to something your body is doing. is reacting. Doing so, he says, allows you to come to terms with emotions you may or may not have fully recognized.<br>

          Leo Newhouse, a senior neurology social worker at Beth Israel Deaconess Hospital in Boston, says that once you allow yourself to read your body's signal that something is significantly bothering you, you can better accept what you're feeling and achieve a better feeling. of calm <br><br>

          bb-I think that will be enough information for today.<br> <br>

          aj- Hey, does crying help with stress or depression? <br><br>

          ah- Tell me more about the benefits of expressing my feelings by crying? <br>
           ",
        
          "bo" => "Well now you know, crying helps people a lot and with their problems, letting off steam helps them stay calm and move on. <br><br>

          bb- I think that will be enough information for today. <br><br>
          an- Do the people around me also influence? <br><br>
          ah- Tell me more about the benefits of expressing my feelings by crying? <br><br>
          ap- Hey, what types of mental illnesses exist? ",
            

          "bp" => "Oh, that's great, it's very important to be informed about some problems. <br><br>

          bb-I think that will be enough information for today.<br> <br>

          ah- Tell me more about the benefits of expressing my feelings by crying? <br>",

        

          "bq" => "Ohhhh that's good, it's very important to be informed about some problems <br>
          
        
          ap- Hey, what types of mental illnesses exist? ",

          "br" => "Well now you know, crying helps people a lot and with their problems, letting off steam helps them stay calm and move on. <br><br>

         
          ah- Tell me more about the benefits of expressing my feelings by crying? <br>


          ap- Hey, what types of mental illnesses exist? ",

        

         
          "bt" => "Well, if you can get out of the comfort zone. It is a process that is usually difficult because it involves directly facing many of our fears. It is a leap into the void and without a net that can produce anxiety and fear. Despite Of all, doing it is worth it because only then can we grow as people, increase our self-esteem, feel fully satisfied, excited, stimulated, and discover that life is worthwhile.<br>
           

          bb-I think that will be enough information for today.<br> <br>
         
          bu- Is it good or bad to be in a comfort zone? <br> <br>",

          "bu" => "Yerkes and John D. Dodson discovered that the state of relative comfort generates a constant level of performance, but that it can only be increased if there is a certain degree of anxiety, excitement and risk. In conclusion, if you expect overcome yourself, you must leave the comfort zone! <br><br>

          R-Does crying help? <br>",

          

          "bv" => "I'm glad you understood. Do you want to know more? <br>

          bb- I think that will be enough information for today, thanks <br>",
         
        
          "bw" => "I'm glad Behind dreams there are always efforts that people don't see keep going. Do you want to know more?? <br>
          bb-I think that will be enough information for today. <br><br>

        
          ah- Tell me more about the benefits of expressing my feelings by crying? <br><br>

          av-does traveling to the countryside help at all? ",
           


          "bx" => "That's right they are mainly important, people are important because we contribute ideas, relationships, change, hunger, nonconformity, we are the engine of the rest of things that without us could not start or continue. < <br><br>

          aj- hey, does crying help with stress or depression? ",
           

          "by" => "Well now you know and it's very important, you can be an agent of change even just with a good morning you can brighten someone's day. <br><br>

       

          bu- Is it good or bad to be in a comfort zone <br><br>",

          "bz" => "That's right, people are very important. Each one of us has different human values ​​and among the most important are: Honesty. It means that as people we must always tell the truth. <br><br>
        
          bf- What happens if I accumulate a lot of stress? <br><br>",




    
          
    "ca" => "Depression is a mental disorder fundamentally characterized by a low state of mind and feelings of sadness, associated with changes in behavior, level of activity and thought.<br><br>

   
     g- I feel very sad.<br><br>

     h- I feel lonely. <br><br>

     ah-Does crying have benefits? <br><br>

     ab-What were you created for? <br>" ,

    "cb" => "There is a wave, especially on social networks, of people who claim to go to a psychologist to solve what stops them from moving forward. This fact should go unnoticed if it weren't for the fact that until now it seemed to be a taboo subject that very few spoke, as if asking an expert for help was an act of vandalism or retracted us as people with mental illness... <br>

     Fortunately, mental health is currently being taken more into consideration, thanks to the visibility work being done in campaigns and the media. <br> <br>
     bb-I think that will be enough information for today. <br><br>

     ah-Does crying have benefits? <br><br>

     ab-What were you created for? <br><br>" ,

     "cd" => "Well, you know, there are even effects due to psychological problems.<br><br>


     g- I feel very sad. <br><br>
     R- Does crying help? <br><br>
     bg- like what effects?<br>" ,



     "cg" => " Well, if you see a sad person, help them for me. <br><br>

     bh- okay. <br><br>
     ab-What were you created for? <br><br>" ,

     "ch" => "Information is power and I hope you use it wisely and help others. <br><br>",
    

     "cj" => "Depression is a mental disorder fundamentally characterized by low mood and feelings of sadness, associated with changes in behavior, activity level and thought.<br><br>

     
     g- I feel very sad. <br><br>
     h- I feel lonely.<br><br>
     Ah- Does crying have benefits? <br><br>
     ab- Why were you created? <br><br>" ,

     "ck" => "Definitely yes A walk in the woods has been shown to help fight depression, and even the view of the woods from a hospital room helps patients feel calmer. If you need to improve your mood, Courage, set course for the mountain.<br><br>

     bb-I think that will be enough information for today. <br><br>
     bf- What happens if I accumulate a lot of stress? <br><br>
     ah- Does crying have benefits?<br><br>
     ab- Why were you created? <br><br>" ,




     "cl" => "Well now you know and I'm glad you now have that knowledge, not only for yourself but to help other people. <br>< <br>
    
     bn- Anything else I should know?<br><br>

     ak-What is the comfort zone? <br><br>" ,
 


         ////////////////////////////////////////////////////////////////////

         "co" => "Well now you know, nature has both physical and spiritual power.<br><br>
     
         cn- nature is beautiful and what it can do<br>",
    
         "cp" => "I know nature has great powers in us even if we don't see them. <br><br>
         bb- I think that will be enough information for today. <br><br> " ,
    
    
         "cr" => " If you need a hand, remember that I have two. Saint Augustine. The greatest spectacle is a brave man fighting adversity, but there is another even greater one: seeing another man rush to his aid.<br ><br>
         bb-I think that will be enough information for today. <br><br>
    
         g- I feel very sad. <br><br>
         H- I feel alone. <br><br>
         ah-Does crying have benefits? <br><br>" ,
    
         "cs" => "Well, you already know that water has a lot of power, it can heal us and help us at the same time.<br><br>
         
         cq- Your work is great. <br><br>" ,
    
         "ct" => "A study published in the National Institutes of Health (NIH) has shown that human emotions have the most powerful effect on water, with positive emotions increasing the energy of water and stabilizing it, while negative ones reduce their energy and make radical changes.<br><br>
    
         a- How do you feel? <br><br>
    
         ak- What is the comfort zone? <br><br>
    
         g- I feel lonely and sad. <br><br>
    
         bu- Is it good or bad to be in a comfort zone? <br><br>
    
         bd- Give me more information about psychology. <br><br>" ,
   





    "tu nombre es?" => "Mi nombre es " . $bot->getName(),
    "tu eres?" => "Yo soy  " . $bot->getGender()
    
];

if (isset($_GET['msg'])) {
   
    $msg = strtolower($_GET['msg']);
    $bot->hears($msg, function (Bot $botty) {
        global $msg;
        global $questions;
        if ($msg == 'hi' || $msg == "hello") {
            $botty->reply('Hola');
        } elseif ($botty->ask($msg, $questions) == "") {
            $botty->reply("Sorry, the questions must be related to the list I have.");
        } else {
            $botty->reply($botty->ask($msg,$questions));
        }
    });
}
