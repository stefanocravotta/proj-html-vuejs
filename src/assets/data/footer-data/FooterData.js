const aboutUs = {
    title: "ABOUT US",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos est nulla dolorum repudiandae tenetur sit doloremque minima id molestiae cupiditate!",
    logo: require("../../images/logo_footer.png")
}
const archives = {
    title : "ARCHIVES",
    date: [
        {
            data : "OCTOBER 2014 (2)"
        },
        {
            data : "SEPTEMBER 2014 (2)"
        },
        {
            data : "AUGUST 2014 (2)"
        },
        {
            data : "JULY 2014 (2)"
        },
        {
            data : "JUNE 2014 (2)"
        },
        {
            data : "MAY 2014 (1)"
        },
    ]
}
const ourFeatures = {
    title : "OUR FEATURES",
    text : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos est nulla dolorum!",
    checkList: [
        {
            img: require("../../images/style_4_alt.png"),
            listText: "Friendly and welcoming place."
        },
        {
            img: require("../../images/style_4_alt.png"),
            listText: "Science and art classes."
        },
        {
            img: require("../../images/style_4_alt.png"),
            listText: "Positive learning environment."
        },
        {
            img: require("../../images/style_4_alt.png"),
            listText: "Educational field trips."
        },
        {
            img: require("../../images/style_4_alt.png"),
            listText: "Writing amd reading classes."
        },
        {
            img: require("../../images/style_4_alt.png"),
            listText: "Science and art classes."
        },
    ]
}
const recentPost = {
    title : "RECENT POST",
    posts: [
        {
        img : require("../../images/blog_10-150x150.jpg"),
        title : "Drawing and Painting Lessons",
        icon: require("../../images/date_footer.png"),
        date: "10-03-2014"
        },
        {
        img : require("../../images/blog_09-150x150.jpg"),
        title : "Fall Parents Meeting Day",
        icon: require("../../images/date_footer.png"),
        date: "10-03-2014"
        },
        {
        img : require("../../images/blog_08-150x150.jpg"),
        title : "Birthday in Kindergarten",
        icon: require("../../images/date_footer.png"),
        date: "09-20-2014"
        },
    ]
}
const bottomData = [
    {
        icon : require("../../images/behance.png")
    },
    {
        icon : require("../../images/dribbble.png")
    },
    {
        icon : require("../../images/envato.png")
    },
    {
        icon : require("../../images/facebook.png")
    },
    {
        icon : require("../../images/twitter.png")
    },
]

export {aboutUs,archives,ourFeatures,recentPost,bottomData}