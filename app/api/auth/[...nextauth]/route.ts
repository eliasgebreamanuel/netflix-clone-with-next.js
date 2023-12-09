import nextAuth from "@/node_modules/next-auth/index";


const handler = nextAuth();

export {handler as GET, handler as POST};