import os
import datetime

now = datetime.datetime.now().strftime("%Y%m%d-%H%M%S")

print(f"[STARTED] Starting deployment at {now}")

app_root = "/Users/cheonsoo.park/Workspace/chance/devnology-posts"
s3_bucket = "s3://static.devnology.co.kr"

print("====================================================================================================")
print(f"Deploying new version from {app_root}/ to {s3_bucket}/files")
print("====================================================================================================")
os.system(
    f"aws s3 sync {app_root}/config {s3_bucket}/files/config --profile chance")
os.system(
    f"aws s3 sync {app_root}/posts {s3_bucket}/files/posts --profile chance")

end = datetime.datetime.now().strftime("%Y%m%d-%H%M%S")
print(f"[FINISHED] Deployment Finished at {end}")
