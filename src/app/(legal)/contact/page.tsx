const Page = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Reach out for support, partnerships, or billing questions.
        </p>
      </div>
      <div className="space-y-4 text-sm text-muted-foreground">
        <div>
          <h2 className="text-base font-semibold text-foreground">Email</h2>
          <p className="mt-2">support@nodeflow.app</p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-foreground">Office</h2>
          <p className="mt-2">Bengaluru, India</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
