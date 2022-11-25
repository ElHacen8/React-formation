# Pour merger un ticket : 

# git checkout [Mon ticket]
# git checkout develop-boost
# git merge [Mon ticket]
# git push origin develop-boost
# (verification sur gitlab)
# git checkout develop
# git merge develop-boost
# git push origin develop
# git push betagouv develop

---------------------------------
# Et pour l'env staging:  
# git chekcout statging 
# git merge develop
# git push origin staging
# git push betagouv staging
