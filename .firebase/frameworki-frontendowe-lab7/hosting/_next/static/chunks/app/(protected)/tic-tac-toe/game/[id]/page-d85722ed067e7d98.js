(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[832],{2996:(e,r,t)=>{Promise.resolve().then(t.bind(t,3098))},3098:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d});var s=t(5155),a=t(2115),u=t(7058),n=t(1746),i=t(8279),c=t(6046);function d(){let[e,r]=(0,a.useState)(!0),[t,d]=(0,a.useState)(null),m=(0,c.useParams)();return((0,a.useEffect)(()=>{(async()=>{if(!n.j.currentUser)return;let e=(0,u.H9)(n.db,"users",n.j.currentUser.uid,"tictactoe-games",m.id),t=await (0,u.x7)(e);t.exists()&&d(t.data()),r(!1)})()},[n.j.currentUser,n.db,m.id]),e)?(0,s.jsx)("div",{className:"flex min-h-screen items-center justify-center",children:"Loading..."}):t?(0,s.jsx)(i.default,{gameId:m.id,initialState:t}):(0,s.jsx)("div",{className:"flex min-h-screen items-center justify-center",children:"Game not found"})}},6046:(e,r,t)=>{"use strict";var s=t(6658);t.o(s,"redirect")&&t.d(r,{redirect:function(){return s.redirect}}),t.o(s,"useParams")&&t.d(r,{useParams:function(){return s.useParams}}),t.o(s,"usePathname")&&t.d(r,{usePathname:function(){return s.usePathname}}),t.o(s,"useRouter")&&t.d(r,{useRouter:function(){return s.useRouter}}),t.o(s,"useSearchParams")&&t.d(r,{useSearchParams:function(){return s.useSearchParams}})}},e=>{var r=r=>e(e.s=r);e.O(0,[992,782,150,861,839,355,441,517,358],()=>r(2996)),_N_E=e.O()}]);