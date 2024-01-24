import LoginButton from "@/components/auth/loginButton";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main
      className=" flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
  from-slate-800 to-slate-700"
    >
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          {" "}
          <span className="text-6xl">🔐</span> Auth
        </h1>
        <p className="text-white text-lg">A simple authentication service</p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
