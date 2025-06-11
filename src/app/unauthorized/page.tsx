import { PathConstant } from "@/constant";

export default function UnauthorizedPage() {
  return (
    <main>
      <h1>401 - Unauthorized</h1>
      <a href={PathConstant.LOGIN}>
        <p>Please log in to access this page.</p>
      </a>
    </main>
  );
}
