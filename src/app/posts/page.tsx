import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostsContent from "@/components/PostsContent";

export default function Posts() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="relative flex flex-1 flex-col overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_48px]" />
          <div className="absolute left-1/2 top-0 h-[90vw] w-[90vw] max-h-[1200px] max-w-[1200px] -translate-x-1/2 rounded-full bg-neutral-400 opacity-10 blur-[100px]" />
        </div>

        <Navbar />
        <PostsContent />
      </div>
      <Footer />
    </main>
  );
}
