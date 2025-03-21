import { News } from "../types/model.types";

export const news: News[] = [
    {
        id: 1,
        date: "21",
        month: "March",
        title: "Tech Conference 2025 Announced",
        user: "JohnDoe",
        commentsCount: 15,
        image: 'https://images.unsplash.com/photo-1485575301924-6891ef935dcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: "The annual Tech Conference 2025 will take place in Silicon Valley, featuring top industry leaders."
      },
      {
        id: 2,
        date: "18",
        month: "March",
        title: "AI Breakthrough in Healthcare",
        user: "JaneSmith",
        commentsCount: 8,
        image: 'https://images.unsplash.com/photo-1592805144716-feeccccef5ac?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: "A new AI model has been developed to detect early signs of cancer with 98% accuracy."
      },
      {
        image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        id: 3,
        date: "15",
        month: "March",
        title: "SpaceX Successfully Launches Starship",
        user: "ElonFan",
        commentsCount: 25,
        description: "SpaceX has successfully launched its Starship prototype, marking a major milestone in space travel."
      },
      {
        image: 'https://images.unsplash.com/photo-1586191552066-d52dd1e3af86?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        id: 4,
        date: "10",
        month: "March",
        title: "Cybersecurity Alert: Major Data Breach",
        user: "SecurityExpert",
        commentsCount: 30,
        description: "A major company suffered a data breach affecting millions of users worldwide. Authorities are investigating."
      }
];